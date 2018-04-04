import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './user/create_user_container';
import BooksIndexContainer from './books/books_index_container';
import { AuthRoute } from '../util/routes_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header className='app-header'>
      <Link to='/home'>
        <h1>TipTopTomes</h1>
      </Link>
      <NavBarContainer />

    </header>
    <Switch>
      <AuthRoute exact path='/users/new' component={CreateUserContainer} />
      <AuthRoute exact path='/session/new' component={CreateSessionContainer} />
      <Route path='/books' component={BooksIndexContainer} />

    </Switch>

  </div>
);

export default App;
