import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const START_LOADING_REVIEW = 'START_LOADING_REVIEW';
export const START_LOADING_ALL_REVIEWS = 'START_LOADING_ALL_REVIEWS';

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

const startLoadingReviews = () => ({
  type: START_LOADING_ALL_REVIEWS,
});

const startLoadingReview = () => ({
  type: START_LOADING_REVIEW,
});

export const fetchReviews = (bookId) => (dispatch) => {
  dispatch(startLoadingReviews);
  return ReviewApiUtil.fetchReviews(bookId).then(ajaxReviews =>
    (dispatch(receiveAllReviews(ajaxReviews))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const fetchReview = (reviewId) => (dispatch) => {
  dispatch(startLoadingReview);
  return ReviewApiUtil.fetchReview(reviewId).then(ajaxReview =>
    (dispatch(receiveReview(ajaxReview))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const createReview = (review) => (dispatch) => (
  ReviewApiUtil.createReview(review).then(ajaxReview => (
    dispatch(receiveReview(ajaxReview))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
));

export const updateReview = (review) => (dispatch) => (
  ReviewApiUtil.updateReview(review).then(ajaxReview => (
    dispatch(receiveReview(ajaxReview))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
));

export const deleteReview = (reviewId) => (dispatch) => (
  ReviewApiUtil.deleteReview(reviewId).then(() => (
    dispatch(removeReview(reviewId))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
));
