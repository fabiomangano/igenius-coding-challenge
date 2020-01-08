const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const fx = require('money');
const accounting = require('accounting');
const { exchangeRatesArrayToObject } = require('../utils');

fx.base = 'EUR';

const syncEuroExchangeRates = async () => {
  const res = await axios.get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml');
  const parsedXml = await parser.parseStringPromise(res.data);
  const exchangeRates = parsedXml['gesmes:Envelope'].Cube[0].Cube;
  return exchangeRatesArrayToObject(exchangeRates);
};

const convertAmount =  (exchangeRatesForSelectedDay, amount, src_currency, dest_currency) => {
  fx.rates = exchangeRatesForSelectedDay;
  let converted_amount = fx(amount).from(src_currency).to(dest_currency);
  converted_amount = accounting.toFixed(converted_amount, 2);
  return converted_amount;
}

module.exports = {
  syncEuroExchangeRates,
  convertAmount,
};
