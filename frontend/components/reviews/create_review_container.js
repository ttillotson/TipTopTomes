import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchBook } from '../../actions/book_actions';
import { createReview, receiveErrors } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => ({
    review: { rating: 0, body: '', book_id: ownProps.match.params.bookId},
    book: state.entities.books[ownProps.match.params.bookId],
    loading: state.ui.loading.reviewLoading,
    errors: state.errors.review,
    formType: 'Create',
  });


const mapDispatchToProps = (dispatch) => ({
  requestBook: (bookId) => dispatch(fetchBook(bookId)),
  submitReview: (review) => dispatch(createReview(review)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
