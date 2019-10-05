import { combineReducers } from 'redux';
import sessionsErrorsReducer from './session_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionsErrorsReducer
})

export default errorsReducer;

//  FUNCTIONALLY EQUIVALENT TO ABOVE
//  function errorsReducer(state, action) {
//   return {
//     session: sessionErrorsReducer(state.session, action)
//   }
// }