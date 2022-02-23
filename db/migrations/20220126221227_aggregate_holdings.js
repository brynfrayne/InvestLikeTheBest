
exports.up = function(knex) {
    return knex.schema
    .createTable('aggregate_holdings', (table) => {
        table.string('investor', 50);
        table.string('fund', 50);
        table.string('CIK', 50);
        table.string('period_of_report', 50);
        table.string('name', 255).notNullable();
        table.string('class',50);
        table.string('cusip',255).notNullable();
        table.integer('value').notNullable();
        table.integer('shares').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('aggregate_holdings');
};

