const debug = require('debug')('SQL:log');
const { Pool } = require('pg');
require('dotenv').config();
const DATABASE_URL = "postgres://memo:memo@localhost:5433/memo?sslmode=disable";
const pool = new Pool(
  {
    connectionString: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
);

module.exports = {

  originalClient: pool,

  async query(...args) {
    debug(...args);

    return this.originalClient.query(...args);
  },

};
