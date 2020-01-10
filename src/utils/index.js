module.exports = {
  exchangeRatesArrayToObject: exchangeRatesArray => exchangeRatesArray.reduce((exchangeRates, item) => {
    exchangeRates[item.currency] = item.rate;
    return exchangeRates;
  }, {}),

  normalizeExchangeRatesArray: exchangeRatesArray => exchangeRatesArray.reduce((exchangeRates, item) => {
    let dailyExchangeRatesArray = item.Cube;
    dailyExchangeRatesArray.push({ $: { currency: 'EUR', rate: '1' } });
    const normalized = dailyExchangeRatesArray.map(exchangeRate => {
      return {
        currency: exchangeRate['$'].currency,
        rate: parseFloat(exchangeRate['$'].rate, 10),
        referenceDate: item['$'].time,
      };
    });
    return exchangeRates.concat(normalized);
  }, []),
};
