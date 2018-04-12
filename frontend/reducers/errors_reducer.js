import sessions from './session_errors_reducer';
import reviews from './reviews_error_reducer';
import shelf from './shelf_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  sessions,
  reviews,
  shelf,
});
