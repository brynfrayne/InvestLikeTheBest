const path = require('path');
const fs = require('fs');
// const request = require('request-promise'); --- doesnt do anything and is deprecated 
const cheerio = require('cheerio');

// Ignore this array for now


// here i want to take all of the data html filings i have and then turn them into an array which i can pass through a for loop to pass each into my html parser function below
const dir = 'server/db/data/';
const files = fs.readdirSync(dir);
console.log(files);




// below i have written a function which will take the raw 13f html file and turn it into a json object with corresponging key values
    const htmlParser = (src, fileName, investor) => {
    const holdingsText = [];
    const holdings = [];
    const $ = cheerio.load(fs.readFileSync(src));
    const rows = $("body > table:nth-child(3) > tbody > tr > td")
    console.log($)
    rows.each((index, element) => {
    
      holdingsText.push($(element).text());
      
    });
    const holdingsTextTrimmed = holdingsText.slice(30);


    for (let i = 0; i<holdingsTextTrimmed.length; i += 12) {
      const newObj = {
              name: holdingsTextTrimmed[i + 0], 
              class: holdingsTextTrimmed[i + 1], 
              cusip: holdingsTextTrimmed[i + 2],
              value: holdingsTextTrimmed[i + 3],
              shares: holdingsTextTrimmed[i + 4],
              shPrn: holdingsTextTrimmed[i + 5],
              putCall: holdingsTextTrimmed[i + 6],
              investmentDiscretion: holdingsTextTrimmed[i + 7],
              otherManager: holdingsTextTrimmed[i + 8],
              sole: holdingsTextTrimmed[i + 9],
              shared: holdingsTextTrimmed[i + 10],
              none: holdingsTextTrimmed[i + 11]  
      }
      holdings.push(newObj);
      
    }
    fs.writeFileSync(`server/db/data/${investor}/${fileName}.json`, JSON.stringify(holdings));
    return holdings;
  }


// how can i programmatically take the array made with the for loop above
// and pass each file through the html function and make a json object for each

for (let i = 1; i < files.length; i++) {
    let investorDir = dir+files[i];

    let investorFilings = fs.readdirSync(investorDir);
    
    let q4 = investorDir + '/' + investorFilings[0];
    let q1 = investorDir + '/' + investorFilings[1];
    let q2 = investorDir + '/' + investorFilings[2];
    let q3 = investorDir + '/' + investorFilings[3];
    
    // htmlParser(q4, 'q4', files[i] );
    // htmlParser(q1, 'q1', files[i] );
    // htmlParser(q2, 'q2', files[i] );
    // htmlParser(q3, 'q3', files[i] );
      
}
