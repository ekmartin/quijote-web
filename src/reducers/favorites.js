import * as types from '../actions/ActionTypes';
import createReducer from '../utils/createReducer';

const initialState = {};

export default createReducer(initialState, {
  [types.ADD_FAVORITE_COMPLETE]: (state, action) => {
    const { id } = action.payload;
    return { ...state, [id]: true };
  },

  [types.LOAD_FAVORITES]: (state, action) => {
    return action.payload.reduce((obj, item) => {
      obj[item.id] = true;
      return obj;
    }, {})
  },

  [types.REMOVE_FAVORITE]: (state, action) => {
    const { id } = action.payload;
    return { ...state, [id]: undefined };
  }
});
