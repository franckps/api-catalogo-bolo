module.exports = {
    up: async function(knex){
        return knex.schema.createTable('usuario', table => {
            table.increments('id').primary();
            table.string('nome').notNullable();
            table.string('login').notNullable();
            table.string('senha').notNullable();
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('usuario');
    }
}