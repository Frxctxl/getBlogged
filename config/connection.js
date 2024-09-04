const { Sequelize } = require('sequelize');

const client = new Sequelize(process.env.DB_URL || {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_NAME
});

module.exports = client;
