import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import Quotes from './quotes_container';
import cablecar from 'redux-cablecar';

const car = cablecar.connect(store, 'HelloQuotesChannel');

const app = () => (
  <Provider store={store}>
    <Quotes />
  </Provider>
);

export default app;