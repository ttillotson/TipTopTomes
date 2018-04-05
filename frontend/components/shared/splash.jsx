import React from 'react';
import Logo from './logo';
import Login from './splash_login';
import Signup from './splash_signup';

const Splash = (props) => {

  return(
    <div className='splash_page'>
      <nav className='splash_nav'>
        <Logo />
        <Login />
      </nav>
      <section className='site_header'>
        <h1>Splash</h1>
        <Signup />
      </section>
    </div>
  );
};

export default Splash;
