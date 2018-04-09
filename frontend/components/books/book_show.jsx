import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import ReviewIndexContainer from '../reviews/review_index_container';
import { Link } from 'react-router-dom';

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
    const reviews = Object.values(book.reviews);
    const avgRating = book.average_rating;

    // debugger

    return (
      <div className='book_show_container'>
        <article className='book_show'>
          <section className='book_info'>
            <section className='book_image_col'>
              <img className='book_show_image'
                src={`${book.imgUrl}`}
                alt={`Book Cover`} />
            </section>

            <section className='book_info_detail'>
              <h1 className='book_title'>
                {book.title}
              </h1>

              <h2 className='book_author'>
                <span>by</span> {book.author}
              </h2>

              <h3 className='book_description'>
                {book.description}
              </h3>

              <h5 className='book_published'>
                Published: {book.published}
              </h5>

              <h5 className='book_ISBN'>
                ISBN: {book.iSBN}
              </h5>

            </section>
          </section>
          <Link to={`/reviews/:bookId`}>Add a Review</Link>
          <ReviewIndexContainer
            reviews={reviews}
            currentUser={this.props.currentUser}
            />
        </article>
      </div>
    );
  }
}

export default BookShow;
