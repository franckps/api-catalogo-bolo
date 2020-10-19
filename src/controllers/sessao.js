const db = require('../database/connection');
const encriptadorDeSenha = require('../services/encriptadorDeSenha');
const jwt = require('../services/jwt');

module.exports = {
    create: async function(request, response, next){
        const { login, senha } = request.body
        try{
            const usuario = (await db('usuario').where('login','=',login))[0];
            if(!usuario)
                return response/* .status(400) */.json({
                    message: 'Login inválido'
                })

            let testaSenha = await encriptadorDeSenha.compare(senha, usuario.senha)
            if(!usuario.senha && !senha)
                testaSenha = true

            if(!testaSenha)
                return response/* .status(400) */.json({
                    message: 'Senha inválida'
                })

            const token = await jwt.sign({...usuario, senha: undefined})

            return response.json({...usuario, senha: undefined, token})
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    }
}