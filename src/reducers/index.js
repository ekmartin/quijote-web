import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import quotes from './quotes';
import favorites from './favorites';

const reducer = combineReducers({ quotes, router, favorites });
export default reducer;
