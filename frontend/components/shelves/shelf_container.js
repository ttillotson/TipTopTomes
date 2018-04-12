import { connect } from 'react-redux';
import Shelf from './shelf';
import {
  fetchShelf,
  createShelf,
  createShelfItem,
  updateShelf,
  deleteShelf,
  deleteShelfItem,
  receiveErrors
} from '../../actions/shelf_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return ({
    shelf: state.entities.shelf,
    loading: state.ui.loading.shelfLoading,
    errors: state.errors.shelf
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchShelf: (userId) => dispatch(fetchShelf(userId)),
  createShelf: (shelf) => dispatch(createShelf(shelf)),
  createShelfItem: (shelfItem) => dispatch(createShelfItem(shelfItem)),
  updateShelf: (shelf) => dispatch(updateShelf(shelf)),
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
  deleteShelfItem: (shelfItemId) => dispatch(deleteShelfItem(shelfItemId)),
  clearShelf: (userId) => dispatch(fetchShelf(userId)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
