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
  <main className='main-container'>
    <header className='app-header'>
      <section className='app-header-contents'>
        <Link to='/home' id='logo'>
          <h1>
            <span id='logo_tiptop'>tiptop</span>
            <span id='logo_tomes'>tomes</span>
          </h1>
        </Link>
        <NavBarContainer />
      </section>
    </header>
    <Switch>
      <AuthRoute exact path='/users/new' component={CreateUserContainer} />
      <AuthRoute exact path='/session/new' component={CreateSessionContainer} />
      <Route path='/books' component={BooksIndexContainer} />

    </Switch>

  </main>
);

export default App;
