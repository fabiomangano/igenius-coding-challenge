const Sequelize = require('sequelize');
const { sequelize } = require('../db');
const { currencies } = require('../utils/constants')
const uuid = require('uuid/v4');


const currencyRate = sequelize.define('currencyRate', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: () => uuid(),
  },
  currency: {
    allowNull: false,
    type: Sequelize.ENUM(currencies),
  },
  referenceDate: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  rate: {
    allowNull: false,
    type: Sequelize.FLOAT,
  },
}, {
  timestamps: true,
  createdAt: 'insertedAt',
});

module.exports = {
  currencyRate,
};

