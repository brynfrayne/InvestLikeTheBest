
exports.up = function(knex) {
    return knex.schema
    .createTable('holdings_0001671657', (table) => {
        table.string('name', 255).notNullable();
        table.string('cusip',255).notNullable();
        table.integer('value').notNullable();
        table.integer('shares').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('holdings');
};
