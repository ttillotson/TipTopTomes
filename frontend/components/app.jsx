import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './user/create_user_container';
import BooksIndexContainer from './books/books_index_container';
import Logo from './shared/logo';
import Splash from './splash/splash';
import Footer from './shared/footer';
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
    <Route exact path={'/'} component={Splash} />
    <header className='app-header'>
      <section className='app-header-contents'>
        <Logo />
        <NavBarContainer />
      </section>
    </header>
    <Switch>
      <AuthRoute exact path='/users/new' component={CreateUserContainer} />
      <AuthRoute exact path='/session/new' component={CreateSessionContainer}/>
      <Route path='/books' component={BooksIndexContainer} />

    </Switch>
    <Footer />
  </main>
);

export default App;
