// src/store/currencyReducer.ts
import { SET_CURRENCY_RESULT, SET_CURRENCY_RATE } from '../actions/currencyActions';

const initialState = {
  result: '',
  rate: '',
};

const currencyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENCY_RESULT:
      return { ...state, result: action.payload };
    case SET_CURRENCY_RATE:
      return { ...state, rate: action.payload };
    default:
      return state;
  }
};

export default currencyReducer;
