import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF, RECEIVE_SHELF_ITEM } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserDefaultShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    let bookId;
    let shelfId;
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_BOOK:
            if (action.book.activeDefaultShelves) return action.book.activeDefaultShelves;
            return state;
        case RECEIVE_SHELF:
            if (Boolean(action.shelf.activeDefaultShelves)) return action.shelf.activeDefaultShelves;
            return state;
        // case RECEIVE_SHELF_ITEM:
        //     newState[action.shelfItem.shelf.shelfId].bookIds.push(action.shelfItem.shelf.bookId);
        //     return newState;
        default:
            return state;
    }
};

export default ActiveUserDefaultShelvesReducer;