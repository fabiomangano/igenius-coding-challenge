const express = require('express');
const { syncEuroExchangeRates } = require('./lib');
const { convert, validate } = require('./apis/controllers');

const createApp = async () => {
  const app = express();
  app.use(express.json());
  app.get('/api/v1/convert',validate('convert'), convert(await syncEuroExchangeRates()));
  return app;
};

module.exports = {
  createApp,
}