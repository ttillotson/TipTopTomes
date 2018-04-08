import React from 'react';
import SplashLogo from './splash_logo';
import Login from './forms/splash_login';
import Signup from './forms/splash_signup';
import Pitch from './pitch';
import DiscoveryBoxIndexContainer from './discovery_box/discovery_box_index_container';
import Footer from '../shared/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='splash_page'>
        <section className='site_header'>
          <nav className='splash_nav'>
            <SplashLogo />
            <Login />
          </nav>
          <section className='masthead'>
            <img alt="Meet your next Favorite Book."
              src="http://res.cloudinary.com/tiptoptomes/image/upload/v1522949402/headline.png"/>
            <Signup />
          </section>
        </section>
        <div className='splash_body_container'>
          <section className='splash_body'>
            <Pitch />
            <DiscoveryBoxIndexContainer />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Splash;

// <Image publicId="headline.png" />
