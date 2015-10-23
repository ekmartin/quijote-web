import React from 'react';
import { IndexRoute, Route } from 'react-router';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path='/'>
    <Route path='*' component={NotFoundPage} />
  </Route>
);
