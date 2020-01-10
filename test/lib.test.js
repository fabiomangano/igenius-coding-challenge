const chai = require('chai');
const { convertAmount } = require('../src/lib');
const { rates } = require('./fixtures/currencyRates');

chai.should();

describe('[Lib]', () => {
  it('should correctly convert a requested amount from EUR to USD', (done) => {
    const convertedAmount = convertAmount(rates, 10, 'EUR', 'USD');
    convertedAmount.should.be.a('String');
    convertedAmount.should.be.eql('7.45');
    done();
  });
});

	