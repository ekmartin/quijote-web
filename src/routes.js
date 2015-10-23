import React from 'react';
import { IndexRoute, Route } from 'react-router';
import DashboardRoute from './components/DashboardRoute';

export default (
  <Route path='/'>
    <IndexRoute component={DashboardRoute} />
  </Route>
);
