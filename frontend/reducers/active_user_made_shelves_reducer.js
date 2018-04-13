import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserMadeShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            if (action.book.activeMadeShelves) return action.book.activeMadeShelves;
            return state;
        case RECEIVE_SHELF:
            if (Boolean(action.shelf.activeMadeShelves)) return action.shelf.activeMadeShelves;
            return state;
        default:
            return state;
    }
};

export default ActiveUserMadeShelvesReducer;