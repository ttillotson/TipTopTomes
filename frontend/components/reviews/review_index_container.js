import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { removeReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  removeReview: (review) => dispatch(removeReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
