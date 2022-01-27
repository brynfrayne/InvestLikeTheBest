
exports.up = function(knex) {
    return knex.schema
    .createTable('holdings', (table) => {
        table.string('name_of_issuer', 255).notNullable();
        table.string('cusip',255).notNullable();
        table.bigint('value').notNullable();
        table.integer('shares').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('holdings');
};
