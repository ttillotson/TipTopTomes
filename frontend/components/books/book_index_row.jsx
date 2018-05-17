import React from 'react';
import BookIndexItem from './book_index_item';

const BookIndexRow = ({ books, classTag }) => {

  return (
    <ul className={classTag} >
      {books}
    </ul>
  );
};

export default BookIndexRow;
 