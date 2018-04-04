import React from 'react';
import { Link } from 'react-router-dom';


const activeUser = (currentUser, signout) => {

  return (
  <div className='session-buttons'>
    <Link to={'/'} className='session-button'>
      <button onClick={signout}>
        <span>
          Sign Out
        </span>
      </button>
    </Link>
  </div>
);
};

const nonActiveUser = () => (
  <div className='session_buttons'>
    <Link to={'/users/new'} className='session_button'><span>Sign Up</span></Link>
    <Link to={'/session/new'} className='session_button'>Sign In</Link>
  </div>
);

const SessionButtons = ({ currentUser, signout}) => {
  return (
    currentUser ? activeUser(currentUser, signout) : nonActiveUser()
  );
};

export default SessionButtons;
