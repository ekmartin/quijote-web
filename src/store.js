import promiseMiddleware from 'redux-promise';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import { applyMiddleware, compose, createStore } from 'redux';
import routes from './routes';
import reducer from './reducers';

const middleware = [
  applyMiddleware(promiseMiddleware),
  reduxReactRouter({ routes, createHistory })
];

const finalCreateStore = compose(...middleware)(createStore);

export function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
