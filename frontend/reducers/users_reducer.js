import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { merge } from 'lodash'

// import
// only actions we're concerned with at this point (user auth) are login, logout, and signup
const usersReducer = ( state = {}, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser } )
    default:
      return state;
  }
}

//CMD-L highlights a line!!!
//Cmd-shift-K deletes a line!!!
//use auto-generated switch statements! !but becareufl;1!!!


//import merge from lodash whenever using merge