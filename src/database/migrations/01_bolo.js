module.exports = {
    up: async function(knex){
        return knex.schema.createTable('bolo', table => {
            table.increments('id').primary();
            table.string('imagem').notNullable();
            table.string('nome').notNullable();
            table.string('descricao').notNullable();
            table.string('recheio').notNullable();
            table.string('cobertura').notNullable();
            table.integer('quantidade').notNullable();
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('bolo');
    }
}