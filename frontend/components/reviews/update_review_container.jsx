import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview,
         updateReview,
         receiveErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // let passedReview;
  // let passed = false;
  // debugger
  // if (state.entities.review === {} ){
  //   passedReview = { bookId:ownProps.match.params.bookId,
  //                   reviewInfo: ownProps.match.params.reviewId };
  // } else {
  //   passedReview = state.entities.review;
  //   passed = true;
  // }
  //
  // const wasPassed = {
  //   reviewInfo: passedReview.id,
  //   review: passedReview,
  //   loading: state.ui.loading.reviewLoading,
  //   book: ownProps.match.params.bookId,
  //   errors: state.errors.review,
  //   formType: 'Update',
  // };
  //
  // const notPassed = {
  //   reviewId: passedReview,
  //   review: { rating: 0, review: ''},
  //   loading: state.ui.loading.reviewLoading,
  //   book: ownProps.match.params.bookId,
  //   errors: state.errors.review,
  //   formType: 'Update',
  // };
  // debugger
  // return (passed) ? wasPassed : notPassed;

  return ({
    review: state.entities.review,
    loading: state.ui.loading.reviewLoading,
    errors: state.errors.review,
    formType: 'Update'
  });
};


const mapDispatchToProps = (dispatch) => ({
  requestReview: (reviewInfo) => dispatch(fetchReview(reviewInfo)),
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
            loading,
            reviewInfo} = this.props;

    // return (
    //   <ReviewForm
    //     book={book}
    //     errors={errors}
    //     review={review}
    //     reviewInfo={reviewInfo}
    //     loading={loading}
    //     requestReview={requestReview}
    //     submitReview={submitReview}
    //     clearErrors={clearErrors}
    //     requestBook={requestBook}
    //     formType={formType}
    //     reviewId={this.props.match.params.reviewId}
    //   />
    // );
    return (
      <ReviewForm
        errors={errors}
        review={review}
        loading={loading}
        formType={formType}
        requestReview={requestReview}
        submitReview={submitReview}
        clearErrors={clearErrors}
        reviewId={this.props.match.params.reviewId}
        />
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm));
