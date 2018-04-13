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
  shelf: state.entities.shelf
});

const mapDispatchToProps = (dispatch) => ({
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelfNav));