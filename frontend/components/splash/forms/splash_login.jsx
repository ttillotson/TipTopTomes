import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.session,
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
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    this.props.submitForm(this.state).then(
      () => this.props.history.push('/books'));
  }
  handleDemo(e) {
    let demoUser = {email: 'demo_user@demos.com', password: 'password'};
    this.props.submitForm(demoUser).then(
      () => this.props.history.push('/books'));
  }

  render() {
    return (
      <form className='splash_login'>

        <input type='text'
          value={this.state.email}
          onChange={this.update('email')}
          placeholder='Email Address'/>

        <input type='password'
          value={this.state.password}
          onChange={this.update('password')}
          placeholder='Password'/>

        <button onClick={() => this.handleSubmit}>Sign In</button>
        <button onClick={() => this.handleDemo}>Demo</button>
      </form>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
