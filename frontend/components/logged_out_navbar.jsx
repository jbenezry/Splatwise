import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../actions/session_actions'
import { signup } from '../actions/session_actions'
import { connect } from 'react-redux'


const LoggedOutNavbar = (props) => {
  // debugger
  return (
    <nav className='nav-bar'>
      <div className='nav-bar-left'>
        <img className='logo-wordmark' src={window.logoWordmarkURL} alt='logo-wordmark' />
        <p className='logo-splatmark'>S P L A T W I S E</p>
      </div>
      <div className='logged-out-nav-buttons'>
        <div> 
        </div>
        <div>
          <Link to='/login'>
            <input className='nav-login-button' type="submit" value="Log in" />
          </Link>
          <span>or</span>
          <Link to='/signup'>
            <input className='nav-signup-button' type="submit" value="Sign up" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

// const greeting = [state.session.id] ? state.entities.users[state.session.id].username : 'Welcome'

const msp = state => {
  return {

  }
}

const mdp = dispatch => {
  return {
    login: () => dispatch(login()),
    signup: () => dispatch(signup())
  }
}

export default connect(msp, mdp)(LoggedOutNavbar);