import React from 'react'
import {Link} from 'react-router-dom'

const Splash = props => {
  return (
    <div>
      <h1>Welcome to Splatwise</h1>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Splash;