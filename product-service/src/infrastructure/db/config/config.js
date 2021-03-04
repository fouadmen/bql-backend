require('dotenv').config();

module.exports = {
  development: {
    "username": "postgres",
    "password": "postgres",
    "database": "products",
    "port": "5432",
    "dialect": "postgres"
  }
};