import { connect} from 'react-redux';
import ShelfListItem from './shelf_list_item';
import {
    updateShelf,
    deleteShelf,
    deleteShelfItem,
    receiveErrors
} from '../../actions/shelf_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    shelf: state.entities.shelf,
    defaultShelves: state.entities.activeUserDefaultShelves,
});

const mapDispatchToProps = (dispatch) => ({
    updateShelf: (shelf) => dispatch(updateShelf(shelf)),
    deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShelfListItem));