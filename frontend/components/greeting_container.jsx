import { connect } from "react-redux"
import { logout } from '../actions/session_actions'
import Greeting from './greeting'

// { session, entities: { users } }
const msp = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

// const msp = state => ({
//   currentUser: state.entitiesb.users[state.session.id]
// })

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(msp, mdp)(Greeting)