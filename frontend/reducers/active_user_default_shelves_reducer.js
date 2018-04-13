import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserDefaultShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return  action.book.activeDefaultShelves;
        case RECEIVE_SHELF:
            return  action.shelf.activeDefaultShelves;
        default:
            return state;
    }
};

export default ActiveUserDefaultShelvesReducer;