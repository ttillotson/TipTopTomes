import { connect } from 'react-redux';
import Shelf from './shelf';
import {
  fetchCombinedShelf,
  createShelf,
  updateShelf,
  deleteShelf,
  deleteShelfItem,
  receiveErrors
} from '../../actions/shelf_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    shelf: state.entities.shelf,
    currentUser: state.session.currentUser,
    loading: state.ui.loading.shelfLoading,
    errors: state.errors.shelf,
    shelfType: 'Combined'
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCombinedShelf: (userId) => dispatch(fetchCombinedShelf(userId)),
  createShelf: (shelf) => dispatch(createShelf(shelf)),
  updateShelf: (shelf) => dispatch(updateShelf(shelf)),
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
  deleteShelfItem: (shelfItemId) => dispatch(deleteShelfItem(shelfItemId)),
  clearShelf: (userId) => dispatch(fetchCombinedShelf(userId)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
