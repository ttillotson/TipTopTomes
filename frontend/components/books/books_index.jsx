import React from 'react';
import BookIndexRow from './book_index_row';
import BookIndexItem from './book_index_item';
import LoadingIcon from '../shared/loading_icon';


class BooksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render(){
    const { books, loading, state } = this.props ;

    if (loading) {return <LoadingIcon />; }

    const bookItems = books.map( book => {
      return (
        <BookIndexItem
          key={`${book.id}`}
          book={book}
          />
      );
    });

    let rows = [];
    while ( bookItems.length > 0 ) {
      let row = [];
      for (let i = 0; i < 6; i++){
        row.push(bookItems.pop());
      }
      rows.push(row);
    }


    const bookRows = rows.map((row, i) => (
      <BookIndexRow key={i} books={row} />
    ));

    return (
      <section className='books_index'>

        <ul>
          { bookRows }
        </ul>

      </section>
    );
  }
}

export default BooksIndex;
