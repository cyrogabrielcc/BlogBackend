//articles
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.binary('content').notNull()
        table.integer('userId').references('id')
             .inTable('users')
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('articles')
};
