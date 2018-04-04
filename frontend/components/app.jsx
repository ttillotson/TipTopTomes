import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
    <header>
      <Link to='/home'>
        <h1>TipTopTomes</h1>
      </Link>
      <NavBarContainer />
    </header>
);

export default App;
