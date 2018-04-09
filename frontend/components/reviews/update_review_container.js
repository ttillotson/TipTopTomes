import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  review: state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId]
});

const mapDispatchToProps = (dispatch) => ({
  submitReview: (review) => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
