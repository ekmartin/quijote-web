import { createAction } from 'redux-actions';
import * as types from './ActionTypes';
import fetch from '../utils/fetch';

export const addFavorite = createAction(
  types.ADD_FAVORITE,
  id => fetch(`/favorite/${id}/`, {
    method: 'put'
  })
);

export const loadFavorites = createAction(
  types.LOAD_FAVORITES,
  () => fetch('/favorite/')
);

export function removeFavorite(id) {
  return (dispatch, getState) => {
    fetch(`/favorite/${id}/`, { method: 'delete' })
      .then(
        () => dispatch({
          type: types.FAVORITE_REMOVED,
          payload: { id }
        })
      );
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
