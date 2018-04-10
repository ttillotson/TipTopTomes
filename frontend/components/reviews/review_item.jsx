import React from 'react';
import { Link } from 'react-router-dom';


export default ({ review, deleteReview, currentUser }) => {

  const removeLink = <button onClick={() => deleteReview(review.id)}
    >Delete Review</button>;
  const editLink = <Link to={`/reviews/${review.bookId}/${review.id}`}
    >Update Review</Link>;

  return (
    <article className='review_article'>

      <section className='review_heading'>
        <div className='user_content'>
          <Link to={`#`} >{review.user.username}</Link>
          <span> rated it
            <span className='rating'> {review.rating} </span>
             out of
             <span className='rating'> 5</span>
          </span>
        </div>
        <div className='review_content'>
          {(currentUser && review.user.id === currentUser.id) ? editLink : null }
          {(currentUser && review.user.id === currentUser.id) ? removeLink : null }
        </div>
      </section>

      <p className='review_body'>{review.body}</p>

    </article>
  );
};
