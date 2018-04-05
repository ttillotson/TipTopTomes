import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Link to='/home' id='splash_logo'>
    <h1>
      <span id='splash_logo_tiptop'>tiptop</span>
      <span id='splash_logo_tomes'>tomes</span>
    </h1>
  </Link>
);
