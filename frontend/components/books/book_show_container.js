import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { fetchReviews } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => ({
  book: state.entities.books[ownProps.match.params.bookId],
  bookLoading: state.ui.loading.bookLoading,
  reviewLoading: state.ui.loading.reviewLoading,
  currentUser: state.session.currentUser,
  review: state.entities.review
});

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  fetchReviews: (bookId) => dispatch(fetchReviews(bookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
