const chai = require('chai');
const { normalizeExchangeRatesArray, exchangeRatesArrayToObject  } = require('../src/utils');
const { toNormalize } = require('./fixtures/currencyRates');
const { normalizedExchangeRatesArray, convertedExchangeRatesArray } = require('./utils');

chai.should();

describe('[Utils]', () => {
  it('should correctly normalize an array of exchange rates', (done) => {
    const normalized = normalizeExchangeRatesArray(toNormalize);
    normalized.should.be.a('Array');
    normalized.should.be.eql(normalizedExchangeRatesArray);
    done();
  });

  it('should correctly convert an array of exchange rates to object', (done) => {
    const converted = exchangeRatesArrayToObject(normalizedExchangeRatesArray);
    converted.should.be.a('Object');
    converted.should.be.eql(convertedExchangeRatesArray);
    done();
  });
});
