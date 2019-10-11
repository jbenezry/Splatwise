import { connect } from "react-redux"
import { logout } from '../actions/session_actions'
import { fetchAllUsers } from '../actions/user_actions'
import Dashboard from './dashboard'

// { session, entities: { users } }
const msp = (state) => {
  // debugger
  return {
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}
export default connect(msp, mdp)(Dashboard)