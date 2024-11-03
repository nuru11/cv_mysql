// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("test", "user", "", {
  host: "localhost",
  dialect: 'mysql',
});

module.exports = sequelize;