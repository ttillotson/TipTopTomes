import { connect } from 'react-redux';
import UserContent from './user_content';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  book: state.entities.books[ownProps.match.params.bookId],
  reviews: state.entities.reviews,
  status: state.entities.activeUserBooks[ownProps.match.params.bookId],
  // update status to trigger rerender -> ActiveUserDefaultBooksReducer
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);
