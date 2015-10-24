import * as types from '../actions/ActionTypes';
import createReducer from '../utils/createReducer';

const initialState = {};

function addFavorite(state, action) {
  const { id } = action.payload;
  return { ...state, [id]: true };
}

export default createReducer(initialState, {
  [types.ADD_FAVORITE]: addFavorite,
  [types.ADD_QUOTE]: addFavorite,
  [types.LOAD_FAVORITES]: (state, action) => {
    return action.payload.reduce((obj, item) => {
      obj[item.id] = true;
      return obj;
    }, {});
  },

  [types.FAVORITE_REMOVED]: (state, action) => ({
    ...state, [action.payload.id]: false
  })
});
