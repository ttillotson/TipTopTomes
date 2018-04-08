import React from 'react';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors([]);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(
      () => this.props.history.push('/books'));
  }

  renderErrors() {
    if (this.props.errors) {
      let errors = this.props.errors.map((error, i) => (
        <li key={`${i}`}>{error}</li>
      ));
      // debugger
      return (
        <ul className={'splash_errors'}>
          {errors}
        </ul>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='splash_signup'>

        <input type='text'
          value={this.state.email}
          onChange={this.update('email')}
          placeholder='Email Address'/>

        <input type='text'
          value={this.state.username}
          onChange={this.update('username')}
          placeholder='Username'/>

        <input type='password'
          value={this.state.password}
          onChange={this.update('password')}
          placeholder='Password'/>

        <button>Sign Up</button>

      </form>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
