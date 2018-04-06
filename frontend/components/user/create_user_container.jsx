import React from 'react';
import { connect } from 'react-redux';
import SessionForm from '../session/session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  formType: 'Sign Up',
  errors: errors.sessions,
  navLink: <Link to='/session/new'>Sign In</Link>
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
});


const NewUserForm = ({ submitForm, formType }) => {
  return (
    <SessionForm
      formType={formType}
      submitForm={submitForm}
      />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm);
