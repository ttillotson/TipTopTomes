import * as BooksApiUtil from '../util/books_api_util';
import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS';
export const START_LOADING_SINGLE_BOOK = 'START_LOADING_SINGLE_BOOK';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

const startLoadingBooks = () => ({
  type: START_LOADING_BOOKS,
});

const startLoadingSingleBook = () => ({
  type: START_LOADING_SINGLE_BOOK,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
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

export const createReview = (review) => (dispatch) => (
  ReviewApiUtil.createReview(review).then(ajaxReview => (
  dispatch(receiveReview(ajaxReview)))
), errors => (
  dispatch(receiveErrors(errors.responseJSON))
));

export const updateReview = (review) => (dispatch) => (
  ReviewApiUtil.updateReview(review).then(ajaxReview => (
  dispatch(receiveReview(ajaxReview)))
), errors => (
  dispatch(receiveErrors(errors.responseJSON))
));

export const deleteReview = (review) => (dispatch) => (
  ReviewApiUtil.deleteReview(review).then(ajaxReview => (
  dispatch(removeReview(ajaxReview)))
), errors => (
  dispatch(receiveErrors(errors.responseJSON))
));
