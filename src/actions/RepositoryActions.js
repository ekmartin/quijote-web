import { createAction } from 'redux-actions';
import fetch from '../utils/fetch';
import * as types from './ActionTypes';

export const listQuotes = createAction(types.LIST_QUOTES, () =>
  fetch('/api/quotes')
);

export const retrieveQuote = createAction(types.RETRIEVE_QUOTE, id =>
  fetch(`/api/quote/${id}/`)
);
