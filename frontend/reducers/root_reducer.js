import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import books from './books_reducer';

export default combineReducers({
  session,
  books,
  errors,
});
