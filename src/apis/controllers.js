const { check, validationResult } = require('express-validator');
const { acceptedCurrencies } = require('../utils/constants');
const { currencyRate } = require('../models/currencyRate');
const { exchangeRatesArrayToObject } = require('../utils');
const { convertAmount } = require('../lib');

const convert = o => async(req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  };

  try {
    const { amount, src_currency, dest_currency, reference_date } = req.query;

    const euroExchangeRates = await currencyRate.findAll({
      where: { referenceDate: reference_date },
      raw: true,
    });

    if (euroExchangeRates.length === 0) {
      return res.status(404).json({ errors: { message: 'Exchange rates non available for requested reference_date' } });
    };

    const exchangeRatesObj = exchangeRatesArrayToObject(euroExchangeRates);

    const converted_amount = convertAmount(exchangeRatesObj, amount, src_currency, dest_currency);

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
          .matches(acceptedCurrencies).withMessage('invalid src_currency'),
        check('dest_currency')
          .exists().withMessage('missing dest_currency')
          .matches(acceptedCurrencies).withMessage('invalid dest_currency'),
        check('reference_date')
          .exists().withMessage('missing reference_date')
          .isISO8601().withMessage('invalid reference_date'),
      ];
    }
  }
};

module.exports = {
  convert,
  validate,
};

