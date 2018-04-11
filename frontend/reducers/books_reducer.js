import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const BooksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return merge({}, action.books);
    case RECEIVE_BOOK:
      return merge(newState, {[action.book.book.id]: action.book.book});
    default:
      return state;
  }
};

export default BooksReducer;
