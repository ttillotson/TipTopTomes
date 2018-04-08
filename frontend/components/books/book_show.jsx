import React from 'react';
import LoadingIcon from '../shared/loading_icon';

class BookShow extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.fetchBook(nextProps.match.params.bookId);
    }
  }

  render() {
    const { book, loading } = this.props;

    if (loading) { return <LoadingIcon />; }

    if (!book) { return null; }

    return (
      <article className='book_show'>
        <section className='book_info'>

          <img className='book_show_image'
            src={`${book.img_url}`}
            alt={`Book Cover`} />

          <h1 className='book_title'>
            Title: {book.title}
          </h1>

          <h3>
            Author: {book.author}
          </h3>

          <h3>
            Description: {book.description}
          </h3>

          <h3>
            Published: {book.published}
          </h3>

          <h3>
            ISBN: {book.ISBN}
          </h3>

        </section>
      </article>
    );
  }
}

export default BookShow;
