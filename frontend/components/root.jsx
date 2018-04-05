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
        <NonAuthRoute exact path='/' component={Splash} />
        <Redirect to='/books' component={App} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
