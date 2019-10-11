import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignupFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'
import DashboardContainer from './dashboard_container'
import {Provider} from 'react-redux'
import Splash from './splash'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'


const Root = ({store}) => {
  return (<Provider store={store}>
    <HashRouter>
      {/* <App></App> */}
      {/* HashRouter can only have a single child component, so we wrap our routes in this div */}
      <div>
        {/* <Header />
        <Route exact path="/" component={Feed} />
        <Route path="/users" component={Users} /> */}
        <ProtectedRoute exact path='/dashboard' component={DashboardContainer}/>
        <AuthRoute exact path='/' component={Splash} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </div>
    </HashRouter>
  </Provider>
  )}

export default Root;