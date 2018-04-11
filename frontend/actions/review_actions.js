import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const START_LOADING_REVIEW = 'START_LOADING_REVIEW';



const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
const startLoadingReview = () => ({
  type: START_LOADING_REVIEW,
});


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
