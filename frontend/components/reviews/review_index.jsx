import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {

  render() {
    const { reviews, currentUser, removeReview } = this.props;

    const reviewItems = reviews.map((review, i) => (
      <ReviewItem
        key={`${i}`}
        review={review}
        removeReview={removeReview}
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
