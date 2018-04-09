import React from 'react';
import { Link } from 'react-router-dom';


export default ({ review, avgRating }) => (
  <article className='review_article'>
    <section className='review_heading'>
      <Link to={`#`}>{review.user.username}</Link>
      <span>rated it {review.rating} out of 5</span>
    </section>
    <p className='reviewBody'>{review.body}</p>

  </article>
);
