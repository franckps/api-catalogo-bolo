const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        const { id } = request.params
        try{
            const bolo = (await db('bolo').where('id','=',id))[0];
            bolo.caracteristicas = await db('caracteristica_bolo')
                .join('caracteristica', 'caracteristica.id','caracteristica_bolo.id_caracteristica')
                .orderBy(['caracteristica_bolo.id_bolo','caracteristica_bolo.id'])
                .where('caracteristica_bolo.id_bolo','=',id)
            bolo.imagem = `${ process.env.URL }/uploads/${bolo.imagem}`;
            return response.json(bolo)
        }catch(error){
            return response.status(500).json({
                message: error
            })
        }
    }
}