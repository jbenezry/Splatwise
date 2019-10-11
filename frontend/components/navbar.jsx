import React from 'react'
import { logout } from '../actions/session_actions'
import { connect } from 'react-redux'

const Navbar = (props) => {
  // debugger
  return (
    <nav className='nav-bar'>
      <div className='nav-bar-left'>
        <img className='logo-wordmark' src={window.logoWordmarkURL} alt='logo-wordmark' />
        <p className='logo-splatmark'>Splatwise</p>
      </div>
      <div>
        <input onClick={props.logout} className='nav-logout-button' type="submit" value="Log out" />
        {props.username}
      </div>
    </nav>
  )
}

// const greeting = [state.session.id] ? state.entities.users[state.session.id].username : 'Welcome'

const msp = state => {
  return {
    // username: state.entities.users[state.session.id].username
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Navbar);