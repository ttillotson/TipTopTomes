import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview,
         updateReview,
         receiveErrors } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  let passedReview;
  let passed = false;
  if (state.entities.books[ownProps.match.params.bookId] === undefined){
    passedReview = { bookId:ownProps.match.params.bookId,
                    reviewId: ownProps.match.params.reviewId };
  } else {
    passedReview = state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId];
    passed = true;
  }

  const wasPassed = {
    reviewId: passedReview.id,
    review: passedReview,
    loading: state.ui.loading.reviewLoading,
    book: ownProps.match.params.bookId,
    errors: state.errors.review,
    formType: 'Update',
  };

  const notPassed = {
    reviewId: passedReview,
    review: { rating: 0, review: ''},
    loading: state.ui.loading.reviewLoading,
    book: ownProps.match.params.bookId,
    errors: state.errors.review,
    formType: 'Update',
  };

  return (passed) ? wasPassed : notPassed;
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
            requestReview,
            submitReview,
            clearErrors,
            requestBook,
            errors,
            loading } = this.props;

    return (
      <ReviewForm
        book={book}
        errors={errors}
        review={review}
        loading={loading}
        requestReview={requestReview}
        submitReview={submitReview}
        clearErrors={clearErrors}
        requestBook={requestBook}
        formType={formType}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
