import { connect } from 'react-redux'
import signupForm from './signup_form'
import { signup } from '../actions/session_actions'

// need to import {connect}, the component we contain, and any needed actions for mdp...?

const msp = state => {
  return {
    signupFields: { 
      name: "",
      email: "",
      password: "",
    }
  }
}

const mdp = dispatch => {
  return {
    signup: (user) => dispatch(signup(user))
  }
}


export default connect(msp, mdp)