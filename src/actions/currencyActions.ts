// src/store/currencyActions.ts
export const SET_CURRENCY_RESULT = 'SET_CURRENCY_RESULT';
export const SET_CURRENCY_RATE = 'SET_CURRENCY_RATE';

export const setCurrencyResult = (result: string) => ({
  type: SET_CURRENCY_RESULT,
  payload: result,
});

export const setCurrencyRate = (rate: string) => ({
  type: SET_CURRENCY_RATE,
  payload: rate,
});
