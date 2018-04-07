import React from 'react';

export default ({ book }) => (
  <li>
    <Link to={`/books/${book.id}`}>
      <figure>
        <img className={'book_image'} src={`${book.img_url}`} alt={`Book Cover`} />
      </figure>
    </Link>
    <figcaption className={'book_title'}>{book.title}</figcaption>
  </li>
);
