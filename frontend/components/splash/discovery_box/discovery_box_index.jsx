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

    const bookItems = books.map( book => {
      return (
        <BookIndexItem
          key={`${book.id}`}
          book={book}
          classTag={'discovery_item'}
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
      <BookIndexRow key={i} books={row} classTag={'discovery_row'} />
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
