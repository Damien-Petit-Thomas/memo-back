const debug = require('debug')('SQL:log');
const { Pool } = require('pg');
require('dotenv').config();

const url=process.env.DATABASE_URL;
const pool = new Pool(
  {
    connectionString: url,
    ssl: {
      rejectUnauthorized: false,
    },
  },
);

module.exports = {

  originalClient: pool,
  async query(...args) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa",url),
    debug(...args);

    return this.originalClient.query(...args);
  },

};
