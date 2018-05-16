import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF, RECEIVE_SHELF_ITEM } from '../actions/shelf_actions';
import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const ActiveUserDefaultShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    let bookId;
    let shelfId;
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (action.user) return merge(newState, action.user.defaultShelves );
        default:
            return state;
    }
};

export default ActiveUserDefaultShelvesReducer;