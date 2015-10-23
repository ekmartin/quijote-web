import { createAction } from 'redux-actions';
import fetch from '../utils/fetch';
import * as types from './ActionTypes';

export const listQuotes = createAction(types.LIST_QUOTES, () =>
  fetch('/api/quotes')
);

export const retrieveQuote = createAction(types.RETRIEVE_QUOTE, id =>
  fetch(`/api/quote/${id}/`)
);

export const createQuote = createAction(
  types.CREATE_QUOTE,
  (quote) => fetch('/api/quotes', { method: 'post', body: JSON.stringify(quote) })
);

export const searchResultReceived = createAction(
  types.SEARCH_RESULT_RECEIVED
);

export const searchFailed = createAction(
  types.SEARCH_FAILED
);

export function search(query) {
  return (dispatch, getState) => {
    fetch(`/api/search?q=${query}`)
      .then(
        (response) => dispatch(searchResultReceived(response)),
        (error) => dispatch(searchFailed(error))
      );
  };
}
