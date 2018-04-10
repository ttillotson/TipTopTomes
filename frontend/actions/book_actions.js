import * as BooksApiUtil from '../util/books_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS';
export const START_LOADING_SINGLE_BOOK = 'START_LOADING_SINGLE_BOOK';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';


const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

const receiveBooks = (books) => {
  debugger
  return ({
  type: RECEIVE_BOOKS,
  books
});
};

const startLoadingBooks = () => ({
  type: START_LOADING_BOOKS,
});

const startLoadingSingleBook = () => ({
  type: START_LOADING_SINGLE_BOOK,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});



export const fetchBook = (bookId) => (dispatch) => {
  dispatch(startLoadingSingleBook);
  return BooksApiUtil.fetchBook(bookId).then(ajaxBook =>
    (dispatch(receiveBook(ajaxBook))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const fetchBooks = () => (dispatch) => {
  dispatch(startLoadingBooks);
  return BooksApiUtil.fetchBooks().then(ajaxBooks =>
    (dispatch(receiveBooks(ajaxBooks))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ));
};
