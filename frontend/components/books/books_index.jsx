import React from 'react';
import BookIndexRow from './book_index_row';
import BookIndexItem from './book_index_item';


class BooksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.books;
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render(){
    const books = this.props.books.map( book => {
      return (
        <BookIndexItem
          key={`${book.id}`}
          book={book}
          />
      );
    });
    let bookRows = [];
    while ( books.length > 0 ) {
      let row = [];
      for (let i = 0; i < 6; i++){
        row.push(books.pop());
      }
      bookRows.push(row);
    }

    debugger
      // <BookIndexRow books={} />

    return (
      <section className='books_index'>
        { bookRows }
      </section>
    );
  }
}

export default BooksIndex;
