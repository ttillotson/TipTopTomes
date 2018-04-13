import { combineReducers } from 'redux';
import books from './books_reducer';
import reviews from './reviews_reducer';
import shelf from './shelf_reducer';
import activeUserBooks from './active_user_default_shelf_reducer';
import activeUserShelves from './active_user_shelves_reducer';

export default combineReducers({
  books,
  reviews,
  shelf,
  activeUserBooks,
  activeUserShelves,
});
