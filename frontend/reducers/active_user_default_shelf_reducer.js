import { RECEIVE_BOOK } from '../actions/book_actions';
import merge from 'lodash/merge';

const ActiveUserDefaultReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type){
        case RECEIVE_BOOK:
            return merge({}, action.book.activeDefaultBooks);
        // case RECEIVE_REVIEW:
        //     return merge(newState[action.review])
        default:
            return state;
    }
};

export default ActiveUserDefaultReducer;