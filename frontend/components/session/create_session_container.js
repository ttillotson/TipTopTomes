import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  formType: 'Sign In',
  errors: errors.sessions,
  navLink: <Link to='/users/new'>Sign Up</Link>
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signin(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
