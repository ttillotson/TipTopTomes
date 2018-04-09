import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (review) => dispatch(deleteReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
