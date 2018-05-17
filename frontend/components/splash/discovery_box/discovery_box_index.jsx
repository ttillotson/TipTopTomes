import React from 'react';
import BookIndexRow from '../../books/book_index_row';
import BookIndexItem from '../../books/book_index_item';


const DiscoveryBoxIndex = (props) => {

  const bookItems = props.books.map( book => {
    return (
      <BookIndexItem
        key={`${book.id}`}
        book={book}
        />
    );
  });

  const rows = [];
  while ( bookItems.length > 0 ) {
    let row = [];
    for (let i = 0; i < 7; i++){
      row.push(bookItems.pop());
    }
    rows.push(row);
  }

  const bookRows = rows.map((row, i) => (
    <BookIndexRow key={i} books={row} classTag={'book_index_row'} />
  ));

  return (
    <section>
      <ul>
        { bookRows }
      </ul>
    </section>
  );
};

export default DiscoveryBoxIndex;
