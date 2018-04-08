import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import ReviewIndexContainer from 'review_index_container';

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
      <div className='book_show_container'>
        <article className='book_show'>
          <section className='book_info'>
            <section className='book_image_col'>
              <img className='book_show_image'
                src={`${book.img_url}`}
                alt={`Book Cover`} />
            </section>

            <section className='book_info_detail'>
              <h1 className='book_title'>
                {book.title}
              </h1>

              <h3 className='book_author'>
                <span>by</span> {book.author}
              </h3>

              <h3 className='book_description'>
                {book.description}
              </h3>

              <h3 className='book_published'>
                Published: {book.published}
              </h3>

              <h3 className='book_ISBN'>
                ISBN: {book.ISBN}
              </h3>

            </section>
          </section>

          <REVIEWS>
        </article>
      </div>
    );
  }
}

export default BookShow;
