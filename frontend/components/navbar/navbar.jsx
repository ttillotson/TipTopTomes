import React from 'react';
import SessionButtons from '../session/session_buttons';
import CreateSessionContainer from '../session/create_session_container';
import CreateUserContainer from '../session/create_user_container';
import { Link, withRouter } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser, signout, signin } = this.props;
    return (
      <div className='nav_bar_container'>
        <nav className='nav_bar'>
        <ul className='heading_links'>
          <li>
            <Link to={`/books`}>Home</Link>
          </li>
          <li>
            <Link to={`/bookshelf`}>My Books</Link>
          </li>
        </ul>

        <SessionButtons
          signout={signout}
          currentUser={currentUser}
          signin={signin} />
      </nav>
    </div>
    );
  }
}

export default withRouter(NavBar);
