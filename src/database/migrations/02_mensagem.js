module.exports = {
    up: async function(knex){
        return knex.schema.createTable('mensagem', table => {
            table.increments('id').primary()
            table.string('email').notNullable()
            table.string('nome').notNullable()
            table.string('assunto').notNullable()
            table.string('mensagem').notNullable()
            table.char('status').notNullable().defaultTo('A')
            table.timestamp('data_hora', { useTz: true }).notNullable().defaultTo(knex.fn.now());
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('mensagem');
    }
}