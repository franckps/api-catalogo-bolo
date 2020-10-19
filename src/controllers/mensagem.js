const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        try{
            const mensagem = await db('mensagem')
                .orderBy('data_hora', 'desc')
            return response.json(mensagem)
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    },
    create: async function(request, response, next){
        const { email, nome, assunto, mensagem } = request.body
        try{
            const id = (await db('mensagem').insert({ email, nome, assunto, mensagem }))[0];
            
            const novaMensagem = (await db('mensagem').where('id','=',id))[0];

            return response.json(novaMensagem)
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    },
}