import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainLayout from './containers/MainLayout/MainLayout';

export default (
  <Router history={createBrowserHistory()}>
    <Route path="/" exact component={MainLayout}></Route>
  </Router>
);
