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
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    this.props.submitForm(this.state).then(
      () => this.props.history.push('/books'));
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

        <button>{formType}</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
