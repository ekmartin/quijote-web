import * as types from '../actions/ActionTypes';

const initialState = {
  items: {
    1: { id: 1, title: 'Hello World' },
    2: { id: 2, title: 'Fuckers' }
  }
};

export default function quotes(state = initialState, action) {
  switch (action) {
  case types.SEARCH_QUOTES:
    return state;
  default:
    return state;
  }
}
