import * as BooksApiUtil from '../util/books_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});

export const fetchBook = (bookId) => (dispatch) => (
  BooksApiUtil.fetchBook(bookId).then(ajaxBook =>
    (dispatch(receiveBook(ajaxBook))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const fetchBooks = () => (dispatch) => (
  BooksApiUtil.fetchBooks().then(ajaxBooks =>
    (dispatch(receiveBooks(ajaxBooks))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
