import React from 'react';
import { Link } from 'react-router-dom';


const activeUser = (currentUser, signout) => {

  return (
    <div className='session_buttons'>
      <Link to={'/'} className='session_button'>
        <button onClick={signout}>
            Sign Out
        </button>
      </Link>
    </div>
  );
};

const nonActiveUser = (signin) => {
  let demoUser = {email: 'demo_user@demos.com', password: 'password'};

  const signInDemo = (e) => {
    e.preventDefault();
    signin(demoUser);
  };

  return (
    <div className='session_buttons'>
      <Link to={'/users/new'} className='session_button'>Sign Up</Link>
      <Link to={'/session/new'} className='session_button'>Sign In</Link>
      <Link to={'/'} className='session_button'>
        <button onClick={signInDemo}>
            Demo
        </button>
      </Link>
    </div>
  );
};

const SessionButtons = ({ currentUser, signout, signin }) => {
  return (
    currentUser ? activeUser(currentUser, signout) : nonActiveUser(signin)
  );
};

export default SessionButtons;
