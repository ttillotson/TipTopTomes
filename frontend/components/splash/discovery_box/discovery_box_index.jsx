import React from 'react';
import BookIndexRow from '../../books/book_index_row';
import BookIndexItem from '../../books/book_index_item';


class DiscoveryBoxIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books
    };
  }

  componentWillMount() {
    if (Object.values(this.props.books).length > 0) this.props.fetchBooks();
  }


  render() {
    const { books, loading, state } = this.props ;

    if (loading) {return <LoadingIcon />; }

    debugger;

    const bookItems = props.books.map( book => {
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
