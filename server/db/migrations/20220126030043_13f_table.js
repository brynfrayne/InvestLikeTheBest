
exports.up = function(knex) {
    return knex.schema
    .createTable('13f_table', (table) => {
      table.string('period_of_report', 50);
      table.string('name', 255).notNullable();
      table.string('cusip',255).notNullable();
      table.integer('value').notNullable();
      table.integer('shares').notNullable();

    })
};

// exports.down = function(knex) {
//     return knex.schema.dropTable('13f_table')
// };
