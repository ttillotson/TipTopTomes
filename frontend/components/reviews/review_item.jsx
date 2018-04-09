import React from 'react';
import { Link } from 'react-router-dom';


export default ({ review, removeReview, currentUser }) => {
  const removeLink = <button onClick={removeReview(review)}>Delete Review</button>;

  return (
    <article className='review_article'>
      <section className='review_heading'>
        <Link to={`#`}>{review.user.username}</Link>
        <span>rated it {review.rating} out of 5</span>
        {(review.user.id === currentUser.id) ? removeLink : null }
      </section>
      <p className='reviewBody'>{review.body}</p>

    </article>
  );
};
