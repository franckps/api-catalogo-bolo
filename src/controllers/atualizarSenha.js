const db = require('../database/connection');
const encriptadorDeSenha = require('../services/encriptadorDeSenha');

module.exports = {
    update: async function(request, response, next){
        const { id } = request.params
        const { senha } = request.body
        if(!senha)
            return next();
        try{
            encryptedPassword = await encriptadorDeSenha.hash(senha);
            await db('usuario')
            .where({ id })
            .update({ senha: encryptedPassword })
            const usuario = await db('usuario').where('id','=',id);
            return response.json(usuario)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    }
}