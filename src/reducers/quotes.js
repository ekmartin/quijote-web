import * as types from '../actions/ActionTypes';

const initialState = {
  items: {
    1: { id: 1, author: 'Hanse', text: 'Hello' },
    2: { id: 2, author: 'Dijkstra', text: 'I like this shit' }
  }
};

function makeKeyed(items) {
  return items.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

export default function quotes(state = initialState, action) {
  switch (action) {
  case types.SEARCH_QUOTES:
    return { ...state, items: makeKeyed(action.payload) };
  default:
    return state;
  }
}
