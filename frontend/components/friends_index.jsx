import React from 'react'
import { connect } from 'react-redux'


const msp = state => {
  // debugger
  return {
    friendIds: state.entities.users[state.session.id].friend_ids,
    users: state.entities.users
  }
}

const mdp = dispatch => {

}

const FriendsIndex = props => {
  // debugger
  // return props.friendIds
  const friends = props.friendIds.map(friendId => (
    <li key={friendId}>{props.users[friendId]}</li>
  ))

  return <ul>{friends}</ul>
}

  
export default connect(msp)(FriendsIndex)