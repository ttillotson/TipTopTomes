import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (user) => dispatch(signin(user))
});

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }
  handleDemo(e) {
    e.preventDefault();
    let demoUser = {email: 'demo_user@demos.com', password: 'password'};
    this.props.submitForm(demoUser);
  }

  renderErrors() {
    if (this.props.errors) {
      let errors = this.props.errors.map((error, i) => (
        <li key={`${i}`}>{error}</li>
      ));
      return (
        <ul className={'errors'}>
          {errors}
        </ul>
      );
    }
  }

  render() {
    return (
      <form className='splash_login'>

        { this.renderErrors() }

        <input type='text'
          value={this.state.email}
          onChange={this.update('email')}
          placeholder='Email Address'/>

        <input type='password'
          value={this.state.password}
          onChange={this.update('password')}
          placeholder='Password'/>

        <button onClick={this.handleSubmit}>Sign In</button>
        <button onClick={this.handleDemo}>Demo</button>
      </form>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
