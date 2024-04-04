// /server.js
const { Pool } = require('pg');

export const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});


pool.connect()
