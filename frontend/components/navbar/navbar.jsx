import React from 'react';
import SessionButtons from '../session/session_buttons';
import CreateSessionContainer from '../session/create_session_container';
import CreateUserContainer from '../user/create_user_container';
import { Route, withRouter } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser, signout } = this.props;
    return (
      <nav>
        <Route path='/users/new' component={CreateUserContainer} />
        <Route path='/session/new' component={CreateSessionContainer} />
        <SessionButtons
          signout={signout}
          currentUser={currentUser} />
      </nav>
    );
  }
}

export default withRouter(NavBar);
