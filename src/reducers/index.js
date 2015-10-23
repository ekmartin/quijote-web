import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import quotes from './quotes';

const reducer = combineReducers({ quotes, router });
export default reducer;
