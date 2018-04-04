import React from 'react';
import { connect } from 'react-redux';
import SessionForm from '../session/session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  formType: 'Sign Up'
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
