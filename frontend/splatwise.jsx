import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';
import HashRouter from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  let store //= configureStore();
  if (window.currentUser) {
    const preloadedState = { 
      session: { id: window.currentUser.id },
      entities: { users: { [window.currentUser.id]: window.currentUser}}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  // window.signup = signup;
  // window.logout = logout;
  // window.login = login;
  // window.dispatch = store.dispatch;
  window.getState = store.getState;
  // debugger
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})

