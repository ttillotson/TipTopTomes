import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {

  render() {
    const { reviews, currentUser, deleteReview } = this.props;

    const reviewItems = reviews.map((review, i) => (
      <ReviewItem
        key={`${i}`}
        review={review}
        deleteReview={deleteReview}
        currentUser={currentUser}
        />
    ));

    return(
      <section className='reviews'>
        <span className='review_heading'>COMMUNITY REVIEWS</span>
        <ul className='review_index'>
          { reviewItems }
        </ul>
      </section>
    );
  }
}

export default ReviewIndex;
