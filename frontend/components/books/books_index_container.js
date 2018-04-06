import { connect } from 'react-redux';
import BooksIndex from './books_index';
import { fetchBook, fetchBooks } from '../../action/book_actions';

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  fetchBooks: () => dispatch(fetchBook())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
