import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';
import { signin, signout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configStore();
  }

  window.getState = store.getState();
  console.log(store.getState());

  ReactDOM.render(<Root store={store} />, root);
});
