import * as types from '../actions/ActionTypes';
import createReducer from '../utils/createReducer';

const initialState = {};

export default createReducer(initialState, {
  [types.ADD_FAVORITE]: (state, action) => {
    const { id } = action.payload;
    return { ...state, [id]: true };
  },

  [types.REMOVE_FAVORITE]: (state, action) => {
    const { id } = action.payload;
    return { ...state, [id]: undefined };
  }
});
