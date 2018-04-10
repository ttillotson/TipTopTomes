import sessions from './session_errors_reducer';
import review from './reviews_error_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  sessions,
  review
});
