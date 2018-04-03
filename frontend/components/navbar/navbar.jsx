import React from 'react';
import SessionButtons from '../session/session_buttons';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser, signout } = this.props;
    return (
      <nav>
        <SessionButtons
          signout={signout}
          currentUser={currentUser} />
      </nav>
    );
  }
}

export default NavBar;
