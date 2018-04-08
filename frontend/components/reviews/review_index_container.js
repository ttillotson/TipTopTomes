import { connect } from 'redux';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.books[ownProps.match.params.bookId].reviews
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
