const investor = require('/Users/brynfrayne/BrainStation-Local/Brainstation/capstone/server/db/data/BillAckman/q1.json')
// const fs = require('fs');
// const parsedq1 = JSON.parse(fs.readFileSync(q1));

exports.seed = function(knex) {
    return knex('13f_table')
    .then(() => {
        return knex('13f_table').insert({
            investor:q1.investor,
            fund:q1.fund,
            CIK:q1.CIK,
            period_of_report:q1.period_of_report
        });
    })
};