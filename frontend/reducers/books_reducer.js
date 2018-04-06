import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const defaultState = { books: null };

const BooksReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return merge({}, action.type);
    case RECEIVE_BOOK:
      return merge(newState, {[action.book.id]: action.book});
    default:
      return state;
  }
};
