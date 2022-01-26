
exports.up = function(knex) {
    return knex.schema
    .createTable('filings', function (table) {
      table.integer('cik').notNullable();
      table.string('filer_name', 255).notNullable();
      table.date('period_of_report').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('filings')
};
