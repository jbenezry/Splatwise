import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignupForm from './signup_form_container'
import LoginForm from './login_form_container'
import {Provider} from 'react-redux'
import Splash from './splash'


const Root = ({store}) => {
  return (<Provider store={store}>
    <HashRouter>
      {/* HashRouter can only have a single child component, so we wrap our routes in this div */}
      <div>
        {/* <Header />
        <Route exact path="/" component={Feed} />
        <Route path="/users" component={Users} /> */}
        <Route exact path='/' component={Splash} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </HashRouter>
  </Provider>
  )}

export default Root;