import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';

export default combineReducers({
  session: SessionsReducer
});
