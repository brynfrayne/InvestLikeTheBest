
exports.up = function(knex) {
    return knex.schema
    .createTable('holding_info', (table) => {
      table.string('cusip', 255).notNullable();
      table.string('security_name', 255).notNullable();
      table.string('ticker', 50).notNullable();
      table.string('exchange_code', 10).notNullable();
      table.string('security_type', 50).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('holding_info')
};
