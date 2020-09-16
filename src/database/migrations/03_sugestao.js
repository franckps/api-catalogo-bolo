module.exports = {
    up: async function(knex){
        return knex.schema.createTable('sugestao', table => {
            table.increments('id').primary();
            table.string('email').notNullable();
            table.string('nome').notNullable();
            table.string('sugestao').notNullable();
            table.timestamp('data_hota').notNullable();
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('sugestao');
    }
}