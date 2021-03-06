import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchBook } from '../../actions/book_actions';
import { fetchReview,
         updateReview,
         receiveErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  review: state.entities.reviews[state.session.currentUser.id],
  book: state.entities.books[ownProps.match.params.bookId],
  loading: state.ui.loading.reviewLoading,
  errors: state.errors.reviews,
  formType: 'Update',
});


const mapDispatchToProps = (dispatch) => ({
  requestReview: (reviewInfo) => dispatch(fetchReview(reviewInfo)),
  submitReview: (review) => dispatch(updateReview(review)),
  clearErrors: (errors) => dispatch(receiveErrors(errors)),
  requestBook: (bookId) => dispatch(fetchBook(bookId)),
});

// END CONTAINER CODE
//


//
// BEGIN FORM CODE

class EditReviewForm extends React.Component {
  componentDidMount() {
    if (!this.props.review){
      this.props.requestReview(this.props.match.params.reviewId);
    }
    if (!this.props.book) {
      this.props.requestBook(this.props.match.params.bookId);
    }
  }

  render() {
    return (
      <ReviewForm {...this.props} />
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm));
