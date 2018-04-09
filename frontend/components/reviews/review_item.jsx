import React from 'react';
import { Link } from 'react-router-dom';


export default ({ review }) => (
  <article className='review_article'>
    {review.body}
  </article>
);

// <Link to{`#`}>{review.user}</Link>
