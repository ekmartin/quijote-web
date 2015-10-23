import { createAction } from 'redux-actions';
import fetch from '../utils/fetch';
import * as types from './ActionTypes';

export const listQuotes = createAction(types.LIST_QUOTES, () =>
  fetch('/quotes/')
);

export const retrieveQuote = createAction(types.RETRIEVE_QUOTE, id =>
  fetch(`/quote/${id}/`)
);

export const createQuote = createAction(
  types.CREATE_QUOTE,
  (quote) => fetch('/quotes/', { method: 'post', body: JSON.stringify(quote) })
);

export const searchResultReceived = createAction(
  types.SEARCH_QUOTES_RECEIVED
);

export const searchFailed = createAction(
  types.SEARCH_FAILED
);

export function search(query) {
  return (dispatch, getState) => {
    fetch(`/search/?q=${query}&size=10`)
      .then(
        (response) => dispatch(searchResultReceived(response)),
        (error) => dispatch(searchFailed(error))
      );
  };
}

export function toggleQuoteEditor() {
  return {
    type: types.TOGGLE_QUOTE_EDITOR
  };
}
