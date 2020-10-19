const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        const { nome } = request.query
        if(!nome)
            return next()
        try{
            const bolo = await db('bolo').where('nome','like', `%${nome}%`);
            return response.json(bolo.map(element => {
                return {
                    ...element, 
                    imagem: !!element.imagem? 
                    `${ process.env.URL }/uploads/${element.imagem}` 
                    : ''
                }
            }))
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    }
}