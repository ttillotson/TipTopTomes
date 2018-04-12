import { connect } from 'react-redux';
import Shelf from './shelf';
import {
  fetchShelf,
  fetchCombinedShelf,
  deleteShelf,
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
  fetchShelf: (shelfId) => dispatch(fetchShelf(shelfId)),
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
  clearShelf: () => dispatch(fetchShelf({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
