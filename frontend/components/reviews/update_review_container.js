import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/book_actions';
import { updateReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
