
exports.up = function(knex) {
    return knex.schema
    .createTable('13f_table', (table) => {
      table.string('investor', 50);
      table.string('fund', 50);
      table.string('CIK', 50);
      table.string('period_of_report', 50);

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('13f_table')
};
