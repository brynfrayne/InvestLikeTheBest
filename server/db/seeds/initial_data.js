const fs = require('fs');

const dir = '/Users/brynfrayne/BrainStation-Local/Brainstation/capstone/server/db/data/';
const files = fs.readdirSync(dir);
console.log(files.length);
// console.log(files);
// Below loops through the folder with all of the investors
let investorPromises = [];
for (let i = 1; i < files.length; i++) {
    let investorDir = dir+files[i];
    // Here it reads through each investors specific folder
    let investorFilings = fs.readdirSync(investorDir);

    // Below it goes through each individual json file in the folder and reads it
    for(let j = 4; j<investorFilings.length; j++) {
        let investorData = fs.readFileSync(investorDir +"/"+ investorFilings[j]).toString();
        let parsedData = JSON.parse(investorData)

        // filings is the array of data i want to seed to filings for each file
        // let filings = ;

        investorPromises.push({
            investor:parsedData[0].investor,
            fund:parsedData[0].fund, 
            CIK:parsedData[0].CIK, 
            period_of_report:parsedData[0].period_of_report
        });
    }
};

        exports.seed = function(knex) {
            return knex('13f_table')
            .then(()=>{     
                return knex('13f_table').insert(investorPromises);
            })};
        

        // for holding_info i probably need an additional for loop to go through each stock in each filing
        // let holding_info =[parsedData[0].holdings[k].cusip, parsedData[0].holdings[k].name];

        // let holdings = [parsedData[0].holdings[k].name, parsedData[0].holdings[k].cusip, parsedData[0].holdings[k].value, parsedData[0].holdings[k].shares]

// now i need to make an individual seed file for each investor's holdings  --- i think making one and attaching their period_of_report is the move
// can i do that above as well??

// what would i call the holdings ? -- `holdings_${cik}` -- this way i can pass in the cik programmatically 



