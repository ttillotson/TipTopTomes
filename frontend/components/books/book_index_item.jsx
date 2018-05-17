import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book, classTag }) => (
  <li className={classTag}>
    <figure>
      <Link to={`/books/${book.id}`}>
        <img className='book_image'
             src={`${book.imgUrl}`}
             alt={`Book Cover`} />
        </Link>
      </figure>
    <figcaption className={'book_title'}>{book.title}</figcaption>
  </li>
);
