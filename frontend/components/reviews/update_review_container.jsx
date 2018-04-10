import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview,
         updateReview,
         receiveErrors } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  let passedReview;
  if (state.entities.books[ownProps.match.params.bookId] === undefined){
    passedReview = { bookId:ownProps.match.params.bookId,
                    reviewId: ownProps.match.params.reviewId };
  } else {
    passedReview = state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId];
  }

  return ({
    review: passedReview,
    book: ownProps.match.params.bookId,
    errors: state.errors.review,
  });
};


const mapDispatchToProps = (dispatch) => ({
  requestReview: (reviewId) => dispatch(fetchReview(reviewId)),
  submitReview: (review) => dispatch(updateReview(review)),
  clearErrors: (errors) => dispatch(receiveErrors(errors))
});

class EditReviewForm extends React.Component {

  render() {
    const { review,
            book,
            formType,
            submitReview,
            clearErrors,
            requestBook,
            errors } = this.props;

    return (
      <ReviewForm
        book={book}
        errors={errors}
        review={review}
        submitReview={submitReview}
        clearErrors={clearErrors}
        requestBook={requestBook}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
