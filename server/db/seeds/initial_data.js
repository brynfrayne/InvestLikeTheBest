const fs = require('fs');
const dir = '/Users/brynfrayne/BrainStation-Local/Brainstation/capstone/server/db/data/';
const files = fs.readdirSync(dir);

// Below loops through the folder with all of the investors
let investorPromises = [];
let investorHoldings = [];

for (let i = 1; i < files.length; i++) {
    let investorDir = dir+files[i];

    // Here it reads through each investors specific folder
    let investorFilings = fs.readdirSync(investorDir);

    // Below it goes through each individual json file in the folder and reads it
    for(let j = 4; j<investorFilings.length; j++) {
        let investorData = fs.readFileSync(investorDir +"/"+ investorFilings[j]).toString();
        let parsedData = JSON.parse(investorData)

        // filings is the array of data i want to seed to filings for each file
        // i want to create an array for each investor to push their holdings to below and then send that at the end of the for loop;
        investorPromises.push({
            investor:parsedData[0].investor,
            fund:parsedData[0].fund, 
            CIK:parsedData[0].CIK, 
            period_of_report:parsedData[0].period_of_report
        });
        // we need a 3rd for loop here to iterate through the holdings for each filing
        for (let k=0; k <parsedData[0].holdings.length; k++) {
        investorHoldings.push({
            investor:parsedData[0].investor,
            fund:parsedData[0].fund, 
            CIK:parsedData[0].CIK, 
            period_of_report:parsedData[0].period_of_report,
            name:parsedData[0].holdings[k].name,
            class:parsedData[0].holdings[k].class,
            cusip:parsedData[0].holdings[k].cusip,
            value:parsedData[0].holdings[k].value.replaceAll(',',''),
            shares:parsedData[0].holdings[k].shares.replaceAll(',','')
        })
    }
    }
};
exports.seed = function(knex) {
    return knex('aggregate_holdings')
    .then(() => {
        return knex('aggregate_holdings').insert(investorHoldings);
    })
}
// exports.seed = function(knex) {
//     return knex('13f_table')
//     .then(()=>{     
//         return knex('13f_table').insert(investorPromises);
//     })};
    



