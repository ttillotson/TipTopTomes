import React from 'react';
import { Link } from 'react-router-dom';


const activeUser = (currentUser, signout) => {

  console.log(signout);
  return (
  <div className='session-buttons'>
    <Link to={'/'}>
      <button onClick={signout}>
        Sign Out
      </button>
    </Link>
  </div>
);
};

const nonActiveUser = () => (
  <div className='session-buttons'>
    <Link to={'/users/new'}>Sign Up</Link>
    <Link to={'/session/new'}>Sign In</Link>
  </div>
);

const SessionButtons = ({ currentUser, signout}) => {
  return (
    currentUser ? activeUser(currentUser, signout) : nonActiveUser()
  );
};

export default SessionButtons;
