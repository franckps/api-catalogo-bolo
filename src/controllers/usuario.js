const db = require('../database/connection');
const encriptadorDeSenha = require('../services/encriptadorDeSenha');

module.exports = {
    index: async function(request, response, next){
        try{
            const usuario = await db('usuario').where('status', '<>', 'I');
            return response.json(usuario)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    },
    create: async function(request, response, next){
        const { nome, login, senha } = request.body
        console.log("body: ", request.body)
        try{
            const encryptedPassword = await encriptadorDeSenha.hash(senha);
            const ids = await db('usuario').insert({ nome, login, senha: encryptedPassword });
            const usuario = await db('usuario').where('id','=',ids[0]);
            return response.json(usuario[0])
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    },
    update: async function(request, response, next){
        const { id } = request.params
        const { nome } = request.body
        try{
            await db('usuario')
            .where({ id })
            .update({ nome })
            const usuario = await db('usuario').where('id','=',id);
            return response.json(usuario)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    },
    delete: async function(request, response, next){
        const { id } = request.params
        try{
            await db('usuario')
            .where({ id })
            .update({ status: 'I' })
            const usuario = await db('usuario').where('id','=',id);
            return response.json(usuario)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    },
}