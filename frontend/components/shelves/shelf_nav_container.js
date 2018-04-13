import { connect} from 'react-redux';
import ShelfNav from './shelf_nav';
import {
  fetchShelf,
  createShelf,
  updateShelf,
  deleteShelf,
  deleteShelfItem,
  receiveErrors
} from '../../actions/shelf_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  shelf: state.entities.shelf,
});

const mapDispatchToProps = (dispatch) => ({
  createShelf: (shelf) => dispatch(createShelf(shelf)),
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelfNav));