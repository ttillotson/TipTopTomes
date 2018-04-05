import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import Splash from './splash/splash';
import { AuthRoute, NonAuthRoute } from '../util/routes_util';

import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute exact path='/' component={Splash} />
        <Route path='/books' component={App} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
