const db = require('../database/connection')

module.exports = {
    update: async function(request, response, next){
        const { id } = request.params
        const { status } = request.body
        
        try{
            await db('mensagem')
            .where({ id })
            .update({ status })
            
            const mensagem = (await db('mensagem').where('id','=',id))[0];

            return response.json(mensagem)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    }
}