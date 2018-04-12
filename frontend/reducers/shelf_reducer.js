import { RECEIVE_SHELF, 
         RECEIVE_SHELF_ITEM, 
         REMOVE_SHELF, 
         REMOVE_SHELF_ITEM
        } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const BookShelfReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SHELF:
      return merge(newState, action.shelf);
    case RECEIVE_SHELF_ITEM:
      return merge(newState, {[action.shelfItemId]: action.shelfItem});
    case REMOVE_SHELF: 
      return {};
    case REMOVE_SHELF_ITEM: 
      delete newState[action.shelfItemId];
      return newState;
    default: 
      return state;
  }
};

export default BookShelfReducer;