module.exports = {
    up: async function(knex){
        return knex.schema.createTable('bolo', table => {
            table.increments('id').primary();
            table.string('imagem').notNullable();
            table.string('nome').notNullable();
            table.string('descricao').notNullable();
            table.integer('quantidade').notNullable();
            table.decimal('preco').notNullable().defaultTo(0)
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('bolo');
    }
}