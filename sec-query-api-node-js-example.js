//
// Query API Example
//
const { queryApi } = require('sec-api');

queryApi.setApiKey('aff84ff952620f444a5b6e965a30e3c5882317fe8128ce0cc3383ded654098cb');

const query = {
  query: { query_string: { query: 'formType:"10-Q"' } }, // get most recent 10-Q filings
  from: '0', // start with first filing. used for pagination.
  size: '10', // limit response to 10 filings
  sort: [{ filedAt: { order: 'desc' } }], // sort result by filedAt
};

const filings = await queryApi.getFilings(rawQuery);