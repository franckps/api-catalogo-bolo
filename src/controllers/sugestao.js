const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        try{
            const sugestao = await db('sugestao')
                .orderBy('data_hora', 'desc')
            return response.json(sugestao)
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    },
    create: async function(request, response, next){
        const { email, nome, sugestao } = request.body
        try{
            const id = (await db('sugestao').insert({ email, nome, sugestao }))[0];
            
            const novaSugestao = (await db('sugestao').where('id','=',id))[0];

            return response.json(novaSugestao)
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    },
}