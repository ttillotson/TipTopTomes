import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, signup, receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  formType: 'Sign Up',
  errors: errors.sessions,
  navLink: <Link to='/session/new'>Sign In</Link>
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
  signIn: (user) => dispatch(signin(user))
});


const NewUserForm = ({ submitForm, signIn, formType, errors, currentUser, clearErrors }) => {
  return (
    <SessionForm
      formType={formType}
      submitForm={submitForm}
      errors={errors}
      currentUser={currentUser}
      clearErrors={clearErrors}
      signIn={signIn}
      />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm);
