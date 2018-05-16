import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';
import { RECEIVE_SHELF_ITEM } from '../actions/shelf_actions';

const BooksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return merge({}, action.books);
    case RECEIVE_BOOK:
      return merge(newState, {[action.book.book.id]: action.book.book});
    case RECEIVE_SHELF_ITEM:
      newState[action.shelfItem.shelf.bookId].shelves = action.shelfItem.shelves;
      return newState;
    default:
      return state;
  }
};

export default BooksReducer;
