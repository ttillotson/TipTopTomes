import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchBook, createReview, receiveErrors } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
    review: { rating: 0, review: ''},
    book: state.entities.books[ownProps.match.params.bookId],
    loading: state.ui.loading.bookLoading,
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
