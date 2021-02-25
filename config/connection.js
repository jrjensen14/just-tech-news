// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// create connection to our database, pass in your MySql information for username & password
// const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306,
// });

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // create connection to our database, pass in your MySQL information for username and password
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;