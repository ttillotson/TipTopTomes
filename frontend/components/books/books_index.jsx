import React from 'react';
import BookIndexRow from './book_index_row';
import BookIndexItem from './book_index_item';
import LoadingIcon from '../shared/loading_icon.jsx';


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

    let bookRows = [];
    while ( bookItems.length > 0 ) {
      console.log(bookItems);
      let row = [];
      for (let i = 0; i < 6; i++){
        row.push(bookItems.pop());
      }
      bookRows.push(row);
    }


      // <BookIndexRow books={} />

    return (
      <section className='books_index'>

        <ul>
          {bookRows}
        </ul>


      </section>
    );
  }
}

export default BooksIndex;
