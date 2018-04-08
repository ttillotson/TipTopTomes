import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  book: state.entities.books[ownProps.match.params.bookId],
  loading: state.ui.loading.bookLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookId) => dispatch(fetchBook(bookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
