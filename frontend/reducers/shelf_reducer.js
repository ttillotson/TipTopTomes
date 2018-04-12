import { RECEIVE_SHELF, REMOVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const BookShelfReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SHELF:
      return merge(newState, action.shelf);
    case REMOVE_SHELF: 
      return {};
    default: 
      return state;
  }
};

export default BookShelfReducer;