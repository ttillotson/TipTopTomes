import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return merge({}, action.review);
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return merge({}, newState);
    default:
      return state;
  }
};

export default ReviewReducer;
