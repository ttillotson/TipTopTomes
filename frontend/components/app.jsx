import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './user/create_user_container';

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
      <Route path='/users/new' component={CreateUserContainer} />
      <Route path='/session/new' component={CreateSessionContainer} />

    </header>
);

export default App;
