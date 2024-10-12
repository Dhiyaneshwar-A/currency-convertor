// src/store/index.ts
import { createStore } from 'redux'; // Change this line
import currencyReducer from './reducers/currencyReducer';

const store = createStore(currencyReducer);

export default store;
