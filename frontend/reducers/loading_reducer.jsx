import { RECEIVE_BOOK,
         RECEIVE_BOOKS,
         START_LOADING_BOOKS,
         START_LOADING_SINGLE_BOOK
       } from '../actions/book_actions';
import { RECEIVE_REVIEW,
         RECEIVE_ALL_REVIEWS,
         START_LOADING_REVIEW,
         START_LOADING_ALL_REVIEWS
       } from '../actions/review_actions';
import merge from 'lodash/merge';

const initialState = {
  indexLoading: false,
  bookLoading: false,
  reviewLoading: false,
  reviewIndexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOK:
      return merge(newState, { bookLoading: false });
    case RECEIVE_BOOKS:
      return merge(newState, { indexLoading: false });
    case RECEIVE_REVIEW:
      return merge(newState, { reviewLoading: false });
    case RECEIVE_ALL_REVIEWS:
      return merge(newState, { reviewIndexLoading: false });
    case START_LOADING_BOOKS:
      return merge(newState, { indexLoading: true });
    case START_LOADING_SINGLE_BOOK:
      return merge(newState, { bookLoading: true });
    case START_LOADING_REVIEW:
      return merge(newState, { reviewLoading: true });
    case START_LOADING_ALL_REVIEWS:
      return merge(newState, { reviewIndexLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
