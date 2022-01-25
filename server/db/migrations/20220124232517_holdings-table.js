
exports.up = function(knex) {
    return knex.schema
    .createTable('holdings', (table) => {
        table.string('filing_id', 255).notNullable();
        table.string('name_of_issuer', 255).notNullable();
        table.string('cusip',255).notNullable();
        table.string('title_of_class', 255).notNullable();
        table.bigint('value').notNullable();
        table.integer('shares').notNullable();
        table.string('put_call',255).notNullable();    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('holdings');
};
