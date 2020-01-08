module.exports = {
  exchangeRatesArrayToObject: exchangeRatesArray => exchangeRatesArray.reduce((exchangeRates, item) => {
    let dailyExchangeRatesArray = item.Cube;
    dailyExchangeRatesArray.push({'$': { currency: 'EUR', rate: '1' }})
    let dailyExchangeRatesObj = dailyExchangeRatesArray.reduce((res, cur) => {
      let currency = cur['$'].currency;
      let rate = parseFloat(cur['$'].rate, 10);
      res[currency] = rate;
      return res;
    }, {});
    exchangeRates[item['$'].time] = dailyExchangeRatesObj;
    return exchangeRates;
  }, {})
};





