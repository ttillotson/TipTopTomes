import { RECEIVE_SHELF, 
         RECEIVE_SHELF_ITEM, 
         REMOVE_SHELF, 
         REMOVE_SHELF_ITEM
        } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const defaultState = {name: '', memberships: {}, shelves: {}};

const BookShelfReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SHELF:
      return action.shelf;
    case RECEIVE_SHELF_ITEM:
      return merge(newState.memberships, {[action.shelfItemId]: action.shelfItem});
    case REMOVE_SHELF: 
      return defaultState;
    case REMOVE_SHELF_ITEM: 
      delete newState.memberships[action.shelfItemId];
      return newState;
    default: 
      return state;
  }
};

export default BookShelfReducer;