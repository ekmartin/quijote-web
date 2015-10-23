/* eslint no-reserved-keys: 0 */
import { handleActions } from 'redux-actions';
import * as types from '../actions/ActionTypes';

function handleError(state, action) {
  console.log('Error', action);
}

const initialState = [];

const quotes = handleActions({
  [types.LIST_QUOTES]: {
    next(state, action) {
      return action.payload;
    },
    throw: handleError
  },
  [types.RETRIEVE_QUOTE]: {
    next(state, action) {},
    throw: handleError
  }
}, initialState);

export default quotes;
