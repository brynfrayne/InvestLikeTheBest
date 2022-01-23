
exports.up = function(knex) {
    return knex.schema
    .createTable('filings', function (table) {
      table.string('filing_id', 255).primary();
      table.int('cik').notNullable();
      table.string('filer_name', 255).notNullable();
      table.date('period_of_report').notNullable();
    })
    .createTable('holdings', (table) => {
      table.string('filing_id', 255).notNullable();
      table.string('name_of_issuer', 255).notNullable();
      table.string('cusip',255).notNullable();
      table.string('title_of_class', 255).notNullable();
      table.bigint('value').notNullable();
      table.int('shares').notNullable();
      table.string('put_call',255).notNullable();    
    })
    .createTable('holding_info', (table) => {
      table.string('cusip', 255).notNullable();
      table.string('security_name', 255).notNullable();
      table.string('ticker', 50).notNullable();
      table.string('exchange_code', 10).notNullable();
      table.string('security_type', 50).notNullable();
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable('users').dropTable('holdings').dropTable('holding_info');
};
