import { combineReducers } from 'redux';
import books from './books_reducer';
import reviews from './reviews_reducer';
import shelf from './shelf_reducer';
import activeUserBooks from './active_user_default_books_reducer';
import activeUserDefaultShelves from './active_user_default_shelves_reducer';
import activeUserMadeShelves from './active_user_made_shelves_reducer';

export default combineReducers({
  books,
  reviews,
  shelf,
  activeUserBooks,
  activeUserDefaultShelves,
  activeUserMadeShelves,
});
