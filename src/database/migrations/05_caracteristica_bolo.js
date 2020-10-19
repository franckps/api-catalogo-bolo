module.exports = {
    up: async function(knex){
        return knex.schema.createTable('caracteristica_bolo', table => {
            table.increments('id').primary()
            table.integer('id_caracteristica').unsigned()
            table.foreign('id_caracteristica').references('caracteristica.id')
            table.integer('id_bolo').unsigned()
            table.foreign('id_bolo').references('bolo.id')
        });
    },
    down: async function(knex){
        return knex.schema.dropTable('caracteristica_bolo');
    }
}