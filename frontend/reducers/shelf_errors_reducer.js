import { RECEIVE_SHELF, RECEIVE_SHELF_ERRORS } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ShelfErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHELF:
      return [];
    case RECEIVE_SHELF_ERRORS:
      return action.errors;
    default:
      return state;
  }
};