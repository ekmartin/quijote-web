import * as types from '../actions/ActionTypes';

export default function quotes(state = {}, action) {
  switch (action) {
  case types.SEARCH_QUOTES:
    return state;
  default:
    return state;
  }
}
