import React from 'react';
import BookIndexRow from '../../books/book_index_row';
import BookIndexItem from '../../books/book_index_item';
import LoadingIcon from '../../shared/loading_icon';


class DiscoveryBoxIndex extends React.Component {
  componentDidMount() {
    if (Object.values(this.props.books).length === 0) this.props.fetchBooks();
  }


  render() {
    const { books, loading, state } = this.props ;

    if (loading) {return <LoadingIcon />; }

    const bookItems = books.map( book => (
        <BookIndexItem
          key={`${book.id}`}
          book={book}
          classTag={'discovery_item'}
          />
      )
    );

    const rows = [];
    while ( rows.length < 2 ) {
      let row = [];
      for (let i = 0; i < 8; i++){
        row.push(bookItems.shift());
      }
      rows.push(row);
    }
    const names = ["Little Billy", "Betty Sue"];

    const bookRows = rows.map((row, i) => (
      <article key={i}>
        <h4>{names[i]} liked these books</h4>
        <BookIndexRow books={row} classTag={'discovery_row'} />
      </article>
    ));

    return (
      <section>
        <ul>
          { bookRows }
        </ul>
      </section>
    );
  }
}

export default DiscoveryBoxIndex;
