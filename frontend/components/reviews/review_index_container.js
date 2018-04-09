import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { removeReview, createReview, updateReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.books.reviews
});

const mapDispatchToProps = (dispatch) => ({
  removeReview: (review) => dispatch(removeReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
