import { connect } from 'react-redux'
import SignupForm from './signup_form'
import { signup } from '../actions/session_actions'

// need to import {connect}, the component we contain, and any needed actions for mdp...?

const msp = state => {
  return {
    signupFields: { 
      username: "",
      email: "",
      password: "",
    }
  }
}

const mdp = dispatch => {
  // debugger
  return {
    signup: (user) => dispatch(signup(user))
  }
}


export default connect(msp, mdp)(SignupForm)