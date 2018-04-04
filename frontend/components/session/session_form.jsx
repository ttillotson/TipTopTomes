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
      () => this.props.history.push('/'));
  }

  render() {
    let { formType } = this.props;
    return(
      <section>
        <h2>{formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <label>Username
            <input type='text'
              value={this.state.username}
              onChange={this.update('username')}/>
          </label>
          <label>Password
            <input type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <button>{formType}</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);
