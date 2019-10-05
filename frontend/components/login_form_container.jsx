import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login } from '../actions/session_actions'

// need to import {connect}, the component we contain, and any needed actions for mdp...?

const msp = state => {
  return {
    loginFields: {
      email: "",
      password: "",
    },
    errors: state.errors.session
  }
}

const mdp = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  }
}


export default connect(msp, mdp)(LoginForm)