import * as types from '../actions/ActionTypes';

const initialState = {
  items: {},
  isQuoteEditorOpen: false
};

function makeKeyed(items) {
  return items.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

export default function quotes(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_QUOTES_RECEIVED:
    return { ...state, items: makeKeyed(action.payload) };
  case types.TOGGLE_QUOTE_EDITOR:
    return { ...state, isQuoteEditorOpen: !state.isQuoteEditorOpen };
  default:
    return state;
  }
}
