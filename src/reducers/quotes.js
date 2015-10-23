import * as types from '../actions/ActionTypes';

export default function quotes(state = [], action) {
  switch (action.type) {
  case types.SEARCH_QUOTES_RECEIVED:
    return action.payload;
  default:
    return state;
  }
}
