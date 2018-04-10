import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchBook, updateReview, receiveErrors } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    review: state.entities.books[ownProps.match.params.bookId].reviews[ownProps.match.params.reviewId],
    book: ownProps.match.params.bookId,
    errors: state.errors.review,
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestBook: (bookId) => dispatch(fetchBook(bookId)),
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
        review={review}
        book={book}
        formType={formType}
        submitReview={submitReview}
        clearErrors={clearErrors}
        requestBook={requestBook}
        errors={errors}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);
