import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_ALL_USERS } from "../actions/user_actions"
import { merge } from 'lodash'

// import
// only actions we're concerned with at this point (user auth) are login, logout, and signup
const usersReducer = ( state = {}, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      // debugger
      return action.users;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state;
  }
}

export default usersReducer;

