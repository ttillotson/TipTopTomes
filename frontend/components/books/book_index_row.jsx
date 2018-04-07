import React from 'react';
import BookIndexItem from './book_index_item';

const BookIndexRow = ({ books }) => {

  let bookItems = books.map(book => (
    <BookIndexItem
      key={`${book.id}`}
      book={book}
      />
  ));

  return (
    <ul>
      {bookItems}
    </ul>
  );
};

export default BookIndexRow;
