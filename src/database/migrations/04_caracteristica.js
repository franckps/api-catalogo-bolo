module.exports = {
    up: async function(knex){
        return knex.schema.createTable('caracteristica', table => {
            table.increments('id').primary()
            table.string('imagem').notNullable()
            table.string('tipo').notNullable()
            table.string('nome').notNullable()
            table.string('descricao').notNullable()
            table.unique(['tipo', 'nome'])
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('caracteristica');
    }
}