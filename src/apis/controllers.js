const { check, validationResult } = require('express-validator');
const { convertAmount } = require('../lib');

const regEx = /(EUR|USD|JPY|BGN|CZK|DKK|GBP|HUF|PLN|RON|SEK|CHF|ISK|NOK|HRK|RUB|TRY|AUD|BRL|CAD|CNY|HDK|IDR|ILS|INR|KRW|MXN|MYR|NZD|PHP|SGD|THB|ZAR)$/;

const convert = euroExchangeRates => (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  };

  try {
    const { amount, src_currency, dest_currency, reference_date } = req.query;

    if (!euroExchangeRates[reference_date]) {
      return res.status(404).json({ errors: { message: 'Exchange rates non available for specified reference_date' } });
    };

    let converted_amount = convertAmount(euroExchangeRates[reference_date], amount, src_currency, dest_currency);

    res.json({
      src_currency,
      amount,
      dest_currency,
      converted_amount,
      reference_date,
      date: new Date(),
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: { message: 'Request failed due internal server error' } });
  }
};

const validate = method => {
  switch (method) {
    case 'convert': {
      return [
        check('amount')
          .exists().withMessage('missing amount')
          .isCurrency().withMessage('invalid amount format'),
        check('src_currency')
          .exists().withMessage('missing src_currency')
          .matches(regEx).withMessage('invalid src_currency'),
        check('dest_currency')
          .exists().withMessage('missing dest_currency')
          .matches(regEx).withMessage('invalid dest_currency'),
        check('reference_date')
          .exists().withMessage('missing reference_date')
          .isISO8601().withMessage('invalid reference_date'),
      ]
    }
  }
}

module.exports = {
  convert,
  validate,
}

