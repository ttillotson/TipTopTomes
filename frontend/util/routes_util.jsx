import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) =>(

  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/books' />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact}) =>(
  <Route path={path} exact={exact} render={(props) => (
    loggedIn  ? (
      <Component {...props} />
    ) : (
      <Redirect to='/session/new' />
    )
  )} />
);

const mapStateToProps = (state, ownProps) => {
  // let reviewedBooks = state.session.currentUser.reviewedBooks;
  // const beenReviewed = reviewedBooks[ownProps.match.params.bookId] !== undefined;

  return ({
    loggedIn: Boolean(state.session.currentUser),
    // reviewed: beenReviewed,
  });
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

