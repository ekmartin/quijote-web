import * as types from '../actions/ActionTypes';
import createReducer from '../utils/createReducer';

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

function loadQuotes(state, action) {
  return {
    ...state,
    items: {
      ...state.items,
      ...makeKeyed(action.payload)
    }
  };
}

export default createReducer(initialState, {
  [types.LOAD_FAVORITES]: loadQuotes,
  [types.SEARCH_QUOTES_RECEIVED]: loadQuotes,
  [types.TOGGLE_QUOTE_EDITOR]: (state, action) => {
    return { ...state, isQuoteEditorOpen: !state.isQuoteEditorOpen };
  }
});
