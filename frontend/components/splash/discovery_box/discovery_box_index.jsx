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
    const names = ['Barbra Anne', 'Betty Sue'];

    const bookRows = rows.map((row, i) => (
      <article key={i}>
        <section>
          <h4>Because {names[i]} liked... </h4>
          <BookIndexRow books={row} classTag={'discovery_row'} />
        </section>
        <figure className={'discovery_arrow'}/>
        <section>
          <h4>She disocvered:</h4>
          <ul>
            {bookItems.shift()}
          </ul>
        </section>
      </article>
    ));

    return (
      <section className={'discovery_box'}>
        <h3>What will <i>you</i> discover?</h3>
        { bookRows }
      </section>
    );
  }
}

export default DiscoveryBoxIndex;
