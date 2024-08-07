const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mini-shop', 'postgres', 'danitoya', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize