import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import SplashContainer from './splash/splash_container';
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
        <AuthRoute exact path='/' component={SplashContainer} />
        <Route component={App} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
