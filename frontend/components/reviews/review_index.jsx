import React from 'react';
import ReviewItem from './review_item';
import LoadingIcon from '../shared/loading_icon';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reviews;
  }

  componentWillReceiveProps (nextProps) {
    debugger
  }

  render() {
    const { reviews, loading, currentUser, deleteReview } = this.props;

    if (loading){ return LoadingIcon; }

    const reviewItems = Object.values(reviews).map((review, i) => (
      <ReviewItem
        key={`review-${review.id}`}
        review={review}
        deleteReview={deleteReview}
        currentUser={currentUser}
        />
    ));

    return(
      <section className='reviews'>
        <span className='review_index_heading'>Community Reviews</span>
        <ul className='review_index'>
          { reviewItems }
        </ul>
      </section>
    );
  }
}

export default ReviewIndex;
