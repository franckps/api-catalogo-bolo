const { orderBy } = require('../database/connection')
const db = require('../database/connection')

module.exports = {
    index: async function(request, response, next){
        try{
            const bolo = await db('bolo').orderBy('id','desc');
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
    },
    create: async function(request, response, next){
        let imagem = ''
        if(!!request.file)
            imagem = request.file.filename
        const { nome, descricao, quantidade, preco, preco, recheio, cobertura, sabor } = request.body
        console.log({ nome, descricao, quantidade, preco, recheio, cobertura, sabor })
        const recheios = !!recheio? recheio.split(',').map(element => element.trim()) : [];
        const coberturas = !!cobertura? cobertura.split(',').map(element => element.trim()) : [];
        const sabores = !!sabor? sabor.split(',').map(element => element.trim()) : [];
        const trx = await db.transaction();
        const caracteristicas = [...recheios, ...coberturas, ...sabores];
        try{
            const id = (await trx('bolo').insert({ imagem, nome, descricao, quantidade }))[0];

            for(key in caracteristicas)
                await trx('caracteristica_bolo').insert({ id_caracteristica: caracteristicas[key], id_bolo: id});

            trx.commit()
            const bolo = (await db('bolo').where('id','=',id))[0];
            bolo.caracteristicas = await db('caracteristica_bolo')
                .join('caracteristica', 'caracteristica.id','caracteristica_bolo.id_caracteristica')
                .orderBy(['caracteristica_bolo.id_bolo','caracteristica_bolo.id'])
                .where('caracteristica_bolo.id_bolo','=',id)

            return response.json(bolo)
        }catch(error){
            console.log(error)
            trx.rollback()
            return response.status(500).json({
                message: error
            })
        }
    },
    update: async function(request, response, next){
        const { id } = request.params
        
        let imagem = null
        if(!!request.file)
            imagem = request.file.filename
        else
            imagem = undefined

        const { nome, descricao, quantidade, preco, recheio, cobertura, sabor } = request.body
        const recheios = recheio? recheio.split(',').map(element => element.trim()) : [];
        const coberturas = cobertura? cobertura.split(',').map(element => element.trim()) : [];
        const sabores = sabor? sabor.split(',').map(element => element.trim()) : [];
        const trx = await db.transaction();
        const caracteristicas = [...recheios, ...coberturas, ...sabores]
        try{
            await trx('caracteristica_bolo')
            .where('id_bolo', '=', id)
            .del();

            await trx('bolo')
            .where({ id })
            .update({ imagem, nome, descricao, quantidade, preco })

            for(key in caracteristicas)
                await trx('caracteristica_bolo').insert({ id_caracteristica: caracteristicas[key], id_bolo: id});
            trx.commit()
            
            const bolo = (await db('bolo').where('id','=',id))[0];
            bolo.caracteristicas = await db('caracteristica_bolo')
                .join('caracteristica', 'caracteristica.id','caracteristica_bolo.id_caracteristica')
                .orderBy(['caracteristica_bolo.id_bolo','caracteristica_bolo.id'])
                .where('caracteristica_bolo.id_bolo','=',id)

            return response.json(bolo)
        }catch(error){
            trx.rollback()
            return response.status(500).json({
                message: error
            })
        }
    },
    delete: async function(request, response, next){},
}