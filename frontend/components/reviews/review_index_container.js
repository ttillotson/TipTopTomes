import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  reviews: state.entities.reviews,
  loading: state.ui.loading.reviewIndexLoading
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (review) => dispatch(deleteReview(review)),
  fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
