module.exports = {
    up: async function(knex){
        return knex.schema.createTable('usuario', table => {
            table.increments('id').primary()
            table.string('nome').notNullable()
            table.string('login').notNullable().unique()
            table.string('senha').notNullable()
            table.char('status').notNullable().defaultTo('A')
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('usuario')
    }
}