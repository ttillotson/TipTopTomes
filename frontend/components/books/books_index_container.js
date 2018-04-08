import { connect } from 'react-redux';
import BooksIndex from './books_index';
import { fetchBook,
         fetchBooks,
         receiveErrors } from '../../actions/book_actions';


const mapStateToProps = state => ({
  books: state.books,
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  fetchBooks: () => dispatch(fetchBook()),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
