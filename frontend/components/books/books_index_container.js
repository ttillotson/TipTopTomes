import { connect } from 'react-redux';
import BooksIndex from './books_index';
import { fetchBook,
         fetchBooks,
         receiveErrors } from '../../actions/book_actions';
import selectAllBooks from '../../reducers/selectors';


const mapStateToProps = state => ({
  books: selectAllBooks(state.entities),
  loading: state.ui.loading.indexLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  fetchBooks: () => dispatch(fetchBooks()),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
