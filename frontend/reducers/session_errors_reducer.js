//need to import action constant that reducer will be checking for
import RECEIVE_SESSION_ERRORS from '../actions/session_actions';
import RECEIVE_CURRENT_USER from '../actions/session_actions';

//totally cool to write reducer BEFORE imports, as long as imports are added afterwards based on reducer

export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    // the receive_current_user case is 2nd so that errors will be caught
      case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}