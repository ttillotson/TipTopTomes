import React from 'react';
import BookIndexItem from './book_index_item';

const BookIndexRow = ({ books }) => {

  return (
    <ul className='book_index_row'>
      {books}
    </ul>
  );
};

export default BookIndexRow;
