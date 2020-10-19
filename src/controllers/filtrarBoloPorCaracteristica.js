const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        const { caracteristicas } = request.query
        if(!caracteristicas)
            return next()
        try{
            const bolo = await db('bolo')
                .join('caracteristica_bolo', 'bolo.id','caracteristica_bolo.id_bolo')
                .whereIn('caracteristica_bolo.id_caracteristica', caracteristicas.split(',').map(elm => elm.trim()))
                .select(['bolo.id','bolo.imagem','bolo.nome','bolo.descricao','bolo.quantidade','bolo.preco'])
                .groupBy(['bolo.id','bolo.imagem','bolo.nome','bolo.descricao','bolo.quantidade','bolo.preco'])

            return response.json(bolo.map(element => {
                return {
                    ...element, 
                    imagem: !!element.imagem? 
                    `${ process.env.URL }/uploads/${element.imagem}` 
                    : ''
                }
            }))
        }catch(error){
            console.log(error)
            return response.status(500).json({
                message: error
            })
        }
    }
}