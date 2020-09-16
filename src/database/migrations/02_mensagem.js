module.exports = {
    up: async function(knex){
        return knex.schema.createTable('mensagem', table => {
            table.increments('id').primary();
            table.string('email').notNullable();
            table.string('nome').notNullable();
            table.string('mensagem').notNullable();
            table.timestamp('data_hota').notNullable();
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('mensagem');
    }
}