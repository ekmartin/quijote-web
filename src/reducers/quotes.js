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
  const oldState = Object.keys(state.items).reduce((obj, id) => ({
    ...obj,
    [id]: {
      ...state.items[id],
      filtered: false
    }
  }), {});

  const items = action.payload.map(quote => ({
    ...quote,
    filtered: true
  }));

  return {
    ...state,
    items: {
      ...oldState,
      ...makeKeyed(items)
    }
  };
}

export default createReducer(initialState, {
  [types.LOAD_FAVORITES]: (state, action) => {
    return {
      ...state,
      items: {
        ...state.items,
        ...makeKeyed(action.payload)
      }
    };
  },
  [types.SEARCH_QUOTES_RECEIVED]: loadQuotes,
  [types.CREATE_QUOTE]: (state, action) => {
    return {
      ...state,
      items: {
        ...state.items,
        [action.payload.id]: action.payload
      }
    };
  },
  [types.TOGGLE_QUOTE_EDITOR]: (state, action) => {
    return { ...state, isQuoteEditorOpen: !state.isQuoteEditorOpen };
  }
});
