import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOK:
      return merge({}, action.book.reviews)
    case RECEIVE_REVIEW:
      return merge(newState, {[action.review.authorId]: action.review});
    case RECEIVE_ALL_REVIEWS:
      return merge({}, action.reviews);
    case REMOVE_REVIEW:
      delete newState[action.review.user.id];
      return merge({}, newState);
    default:
      return state;
  }
};

export default ReviewsReducer;
