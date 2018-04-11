import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import CreateSessionContainer from './session/create_session_container';
import CreateUserContainer from './session/create_user_container';
import BooksIndexContainer from './books/books_index_container';
import BookShowContainer from './books/book_show_container';
import CreateReviewContainer from './reviews/create_review_container';
import UpdateReviewContainer from './reviews/update_review_container';
import CombinedShelvesContainer from './shelves/combined_shelves_container';
import SingleShelfContainer from './shelves/shelf_container';
import Logo from './shared/logo';
import Splash from './splash/splash';
import Footer from './shared/footer';
import { AuthRoute, ProtectedRoute, ReviewRoute, EditRoute } from '../util/routes_util';
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
        <Logo />
        <NavBarContainer />
      </section>
    </header>
    <div className='page_content'>
      <Switch>
        <AuthRoute exact path='/users/new'
          component={CreateUserContainer} />

        <Route path ='/bookshelf/:userId'
          component={CombinedShelvesContainer} />

        <Route path ='/bookshelf/:userId/:bookshelfId'
          component={SingleShelfContainer} />

        <AuthRoute exact path='/session/new'
          component={CreateSessionContainer}/>

        <ProtectedRoute exact path='/reviews/:bookId/new'
          component={CreateReviewContainer}/>

        <ProtectedRoute exact path='/reviews/:bookId/:reviewId'
          component={UpdateReviewContainer}/>

        <Route path='/books/:bookId'
          component={BookShowContainer}/>

        <Route path='/books' component={BooksIndexContainer} />

        <Redirect to='/' />
      </Switch>
    </div>
    <Footer />
  </main>
);

export default App;
