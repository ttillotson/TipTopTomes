import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  formType: 'Sign In',
  errors: errors.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signin(user)),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
