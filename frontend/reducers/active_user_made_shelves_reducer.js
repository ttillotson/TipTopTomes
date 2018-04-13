import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserMadeShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_BOOK:
            debugger;
            return action.book.activeMadeShelves;
        case RECEIVE_SHELF:
            return action.shelf.activeMadeShelves;
        default:
            return state;
    }
};

export default ActiveUserMadeShelvesReducer;