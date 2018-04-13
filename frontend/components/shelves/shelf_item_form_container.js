import { connect } from 'react-redux';
import ShelfItemForm from './shelf_item_form';
import {
    createShelfItem,
    deleteShelfItem,
    receiveErrors
} from '../../actions/shelf_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    createShelf: (shelfItem) => dispatch(createShelfItem(shelfItem)),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShelfItemForm));