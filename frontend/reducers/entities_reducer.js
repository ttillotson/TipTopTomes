import { combineReducers } from 'redux';
import books from './books_reducer';
import reviews from './reviews_reducer';

export default combineReducers({
  books,
  reviews,
});
