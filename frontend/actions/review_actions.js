import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';



const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchReview = (reviewId) => (dispatch) =>(
  ReviewApiUtil.fetchReview(reviewId).then(ajaxReview => (
  dispatch(receiveReview(ajaxReview)))
), errors => (
  dispatch(receiveErrors(errors.responseJSON))
));

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
