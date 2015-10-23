import * as types from './ActionTypes';

export function addFavorite(id) {
  return {
    type: types.ADD_FAVORITE,
    payload: { id }
  };
}

export function removeFavorite(id) {
  return {
    type: types.REMOVE_FAVORITE,
    payload: { id }
  };
}

export function toggleFavorite(id) {
  return (dispatch, getState) => {
    if (getState().favorites[id]) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
}
