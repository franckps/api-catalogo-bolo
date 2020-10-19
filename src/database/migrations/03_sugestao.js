module.exports = {
    up: async function(knex){
        return knex.schema.createTable('sugestao', table => {
            table.increments('id').primary();
            table.string('email');
            table.string('nome');
            table.string('sugestao').notNullable();
            table.char('status').notNullable().defaultTo('A')
            table.timestamp('data_hora', { useTz: true }).notNullable().defaultTo(knex.fn.now());
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('sugestao');
    }
}