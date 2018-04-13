import { RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_SHELF } from '../actions/shelf_actions';
import merge from 'lodash/merge';

const ActiveUserShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_BOOK:
            debugger;
            return merge({}, action.book.activeShelves);
        case RECEIVE_SHELF:
            return merge(newState[action.review]);
        default:
            return state;
    }
};

export default ActiveUserShelvesReducer;