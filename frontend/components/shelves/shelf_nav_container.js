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

const mapStateToProps = (state) => ({
  shelves: state.entities.shelf
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelfNav);