const rates = {
  "USD": 0.745101,
  "EUR": 1
};

const toNormalize = [
{
  $: { time: '2020-01-10' },
  Cube: [
    { '$': { currency: 'USD', rate: '1.1091' } },
    { '$': { currency: 'JPY', rate: '121.6' } },
    { '$': { currency: 'BGN', rate: '1.9558' } },
    { '$': { currency: 'CZK', rate: '25.265' } },
    { '$': { currency: 'DKK', rate: '7.4731' } },
    { '$': { currency: 'GBP', rate: '0.8481' } },
    { '$': { currency: 'HUF', rate: '333.85' } },
    { '$': { currency: 'PLN', rate: '4.2462' } },
    { '$': { currency: 'RON', rate: '4.7796' } },
    { '$': { currency: 'SEK', rate: '10.551' } },
    { '$': { currency: 'CHF', rate: '1.0822' } },
    { '$': { currency: 'ISK', rate: '136.6' } },
    { '$': { currency: 'NOK', rate: '9.8745' } },
    { '$': { currency: 'HRK', rate: '7.4445' } },
    { '$': { currency: 'RUB', rate: '68.041' } },
    { '$': { currency: 'TRY', rate: '6.5198' } },
    { '$': { currency: 'AUD', rate: '1.6132' } },
    { '$': { currency: 'BRL', rate: '4.5188' } },
    { '$': { currency: 'CAD', rate: '1.4498' } },
    { '$': { currency: 'CNY', rate: '7.6773' } },
    { '$': { currency: 'HKD', rate: '8.6137' } },
    { '$': { currency: 'IDR', rate: '15263.99' } },
    { '$': { currency: 'ILS', rate: '3.8476' } },
    { '$': { currency: 'INR', rate: '78.6915' } },
    { '$': { currency: 'KRW', rate: '1286' } },
    { '$': { currency: 'MXN', rate: '20.8634' } },
    { '$': { currency: 'MYR', rate: '4.5212' } },
    { '$': { currency: 'NZD', rate: '1.6769' } },
    { '$': { currency: 'PHP', rate: '55.998' } },
    { '$': { currency: 'SGD', rate: '1.4969' } },
    { '$': { currency: 'THB', rate: '33.534' } },
    { '$': { currency: 'ZAR', rate: '15.8081' } },
    { '$': { currency: 'EUR', rate: '1' } }],
}];

module.exports = {
  rates,
  toNormalize
}
