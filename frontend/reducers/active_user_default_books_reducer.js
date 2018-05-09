import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF, RECEIVE_SHELF_ITEM } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserDefaultReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type){
        case RECEIVE_BOOK:
            return merge({}, action.book.activeDefaultBooks);
        case RECEIVE_SHELF:
            return merge(newState, action.shelf.activeDefaultBooks);
        case RECEIVE_SHELF_ITEM:
            return merge(newState, action.shelfItem.status);
        default:
            return state;
    }
};

export default ActiveUserDefaultReducer;