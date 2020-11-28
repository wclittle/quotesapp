import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import Quotes from './quotes_container';

const app = () => (
  <Provider store={store}>
    <Quotes />
  </Provider>
);

export default app;