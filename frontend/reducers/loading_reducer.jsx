import { RECEIVE_BOOK,
         RECEIVE_BOOKS,
         START_LOADING_BOOKS,
         START_LOADING_SINGLE_BOOK
       } from '../actions/book_actions';
import merge from 'lodash/merge';

const initialState = {
  indexLoading: false,
  bookLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOK:
      return merge(newState, { indexLoading: false });
    case RECEIVE_BOOKS:
      return merge(newState, { detailLoading: false });
    case START_LOADING_BOOKS:
      return merge(newState, { indexLoading: true });
    case START_LOADING_SINGLE_BOOK:
      return merge(newState, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
