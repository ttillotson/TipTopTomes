import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return merge(newState, {[action.review.userId]: action.review});
    case RECEIVE_ALL_REVIEWS:
      return merge({}, action.reviews);
    case REMOVE_REVIEW:
      delete newState[action.review.authorId];
      return merge({}, newState);
    default:
      return state;
  }
};

export default ReviewsReducer;
