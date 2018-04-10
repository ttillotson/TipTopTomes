import { combineReducers } from 'redux';
import books from './books_reducer';
import review from './review_reducer';

export default combineReducers({
  books,
  review,
});
