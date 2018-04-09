import React from 'react';
import { Link } from 'react-router-dom';


export default ({ review, deleteReview, currentUser }) => {
  // debugger
  const removeLink = <button onClick={() => deleteReview(review)}
    >Delete Review</button>;
  const editLink = <Link to={`/reviews/${review.bookId}/${review.id}`}
    >Update Review</Link>;

  return (
    <article className='review_article'>
      <section className='review_heading'>
        <Link to={`#`}>{review.user.username}</Link>
        <span>rated it {review.rating} out of 5</span>
        {(currentUser && review.user.id === currentUser.id) ? editLink : null }
        {(currentUser && review.user.id === currentUser.id) ? removeLink : null }
      </section>
      <p className='reviewBody'>{review.body}</p>

    </article>
  );
};
