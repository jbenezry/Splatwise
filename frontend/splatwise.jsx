import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';
import HashRouter from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.signup = signup;
  window.logout = logout;
  window.login = login;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // debugger
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})

