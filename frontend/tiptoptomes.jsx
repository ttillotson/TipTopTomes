import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  console.log(`Outside ${window.currentUser}`);
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configStore(preloadedState);
    console.log(preloadedState);
    delete window.currentUser;
  } else {
    store = configStore();
  }


  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
