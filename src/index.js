import './styles/main.styl';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { configureStore } from './store';

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('app')
);
