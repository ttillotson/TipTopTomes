import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  formType: 'Sign Up',
  errors: errors.sessions,
  navLink: <Link to='/session/new'>Sign In</Link>
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});


const NewUserForm = ({ submitForm, formType, errors, currentUser, navLink, clearErrors }) => {
  return (
    <SessionForm
      formType={formType}
      submitForm={submitForm}
      errors={errors}
      currentUser={currentUser}
      navLink={navLink}
      />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm);
