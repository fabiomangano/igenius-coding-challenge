const express = require('express');
const { syncEuroExchangeRates } = require('./lib');
const { convert, validate } = require('./apis/controllers');
const { sequelize } = require('./db');
const {currencyRate} = require('./models/currencyRate');

const createApp = async() => {
  const app = express();
  app.use(express.json());
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  const currencyRates = await syncEuroExchangeRates();
  await currencyRate.bulkCreate(currencyRates);
  app.get('/api/v1/convert', validate('convert'), convert());
  return app;
};

module.exports = {
  createApp,
};