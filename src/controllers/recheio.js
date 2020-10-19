const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        try{
            const caracteristica = await db('caracteristica').where('tipo','=','recheio');
            return response.json(caracteristica)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    },
    create: async function(request, response, next){
        const imagem = '';
        const { nome, descricao } = request.body
        try{
            const id = (await db('caracteristica').insert({ imagem, tipo: 'recheio', nome, descricao }))[0];
            const caracteristica = await db('caracteristica').where('id','=',id);
            return response.json(caracteristica[0])
        }catch(error){
            trx.rollback()
            return response.status(500).json({
                message: error
            })
        }
    }
}