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
            cusip:parsedData[0].holdings[k].cusip,
            value:parsedData[0].holdings[k].value.replaceAll(',',''),
            shares:parsedData[0].holdings[k].shares.replaceAll(',','')
        })
        console.log(parsedData[0].holdings[k].shares.replaceAll(',',''));
    }

    }
    // i think i would put the export seed file here so for each investor they add to the array created 
    // above in the parent for loop with their individual holdings in the nested for loop, then when that completes
    // the export seed file is ran here
    


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
        

        // for holding_info i probably need an additional for loop to go through each stock in each filing
        // let holding_info =[parsedData[0].holdings[k].cusip, parsedData[0].holdings[k].name];

        // let holdings = [parsedData[0].holdings[k].name, parsedData[0].holdings[k].cusip, parsedData[0].holdings[k].value, parsedData[0].holdings[k].shares]

// now i need to make an individual seed file for each investor's holdings  --- i think making one and attaching their period_of_report is the move
// can i do that above as well??

// what would i call the holdings ? -- `holdings_${cik}` -- this way i can pass in the cik programmatically 



