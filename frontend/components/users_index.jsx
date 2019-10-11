import React from 'react'
import { connect } from 'react-redux'

const UsersIndex = props => {
  const users = props.users.map(user => (
    <li key={user.id}>{user.username}</li>
  ))
    
  return <ul>{users}</ul>
    // <div>
    //   <p>USERS:</p>
    // </div>
}

const msp = state => {
  return {
    users: Object.values(state.entities.users)
  }
}

const mdp = dispatch => {
  
}

export default connect (msp)(UsersIndex)