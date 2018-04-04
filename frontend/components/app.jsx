import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './user/create_user_container';
import { AuthRoute } from '../util/routes_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
    <header>
      <Link to='/home'>
        <h1>TipTopTomes</h1>
      </Link>
      <NavBarContainer />
      <AuthRoute path='/users/new' component={CreateUserContainer} />
      <AuthRoute path='/session/new' component={CreateSessionContainer} />

    </header>
);

export default App;
