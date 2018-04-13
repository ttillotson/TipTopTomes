import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserDefaultReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type){
        case RECEIVE_BOOK:
            return merge({}, action.book.activeDefaultBooks);
        case RECEIVE_SHELF:
            return merge(newState, action.shelf.activeDefaultBooks);
        default:
            return state;
    }
};

export default ActiveUserDefaultReducer;