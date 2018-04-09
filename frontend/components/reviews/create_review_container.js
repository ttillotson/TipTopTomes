import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/book_actions';
import { updateReview } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  review: { rating: 0, review: ''}
  
});

const mapDispatchToProps = (dispatch) => ({
  submitReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
