import React from 'react';
import Logo from '../shared/logo';
import Login from './forms/splash_login';
import Signup from './forms/splash_signup';
import Pitch from './pitch';
import DiscoveryBoxIndexContainer from './discovery_box/discovery_box_index_container';

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
      <Pitch />
      <DiscoveryBoxIndexContainer />
    </div>
  );
};

export default Splash;
