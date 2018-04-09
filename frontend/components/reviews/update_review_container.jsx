import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, receiveErrors } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => ({
  // review: state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId],
  book: ownProps.match.params.bookId,
  state,
  ownProps
});

const mapDispatchToProps = (dispatch) => ({
  submitReview: (review) => dispatch(updateReview(review)),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

class EditReviewForm extends React.Component {

  render() {
    debugger
    return (
      <ReviewForm

      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
