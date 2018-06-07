import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors([]);
  }

  update(field) {
    return (e) => {
      this.props.clearErrors([]);
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleDemo(e){
    e.preventDefault();
    let demoUser = {email: 'demo_user@demos.com', password: 'password'};
    if (this.props.formType === 'Sign Up'){
      this.props.signIn(demoUser);
    } else {
      this.props.submitForm(demoUser);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    let { formType } = this.props;
    let userField = (
      <label>Username
        <input type='text'
          value={this.state.username}
          onChange={this.update('username')}/>
      </label>
    );

    return(
      <form onSubmit={this.handleSubmit} className='session_form_container'>
        <h1>{formType}</h1>
        { this.renderErrors() }
        <fieldset className='session_form_inputs'>

          <label>Email
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          {(formType === 'Sign Up') ? userField : null }

          <label>Password
            <input type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
        </fieldset>

        <button onClick={this.handleSubmit}>{formType}</button>
        <button onClick={this.handleDemo}>Demo</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
