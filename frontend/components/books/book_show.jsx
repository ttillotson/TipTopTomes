import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../shared/loading_icon';
import ReviewIndexContainer from '../reviews/review_index_container';
import UserContentContainer from './user_content_container';
import ShelfItemFormContainer from '../shelves/shelf_item_form_container';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfForm: false
    };
  }


  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.fetchBook(nextProps.match.params.bookId);
      this.setState({shelfForm: false });
    }
  }

  triggerForm() {
    this.setState({ shelfForm: true });
  }

  render() {
    const { book, bookLoading, reviewLoading, currentUser, defaultShelf } = this.props;

    if (bookLoading) { return <LoadingIcon />; }
    if (reviewLoading) { return <LoadingIcon />; }
    if (!book) { return <LoadingIcon />; }

    const avgRating = book.averageRating;

    let addButton = <button className='add_button' onClick={() => this.triggerForm()}>Add to Shelf</button>;

    const shelfLogic = this.state.shelfForm ? <ShelfItemFormContainer bookId={book.id} /> : addButton;

    let showButton = currentUser ? shelfLogic : null;

    return (
      <div className='book_show_container'>
        <article className='book_show'>
          <section className='book_info'>
            <section className='book_image_col'>
              <img className='book_show_image'
                src={`${book.imgUrl}`}
                alt={`Book Cover`} />
                { showButton }
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
              <UserContentContainer {...this.props} />
            </section>
          </section>
          <ReviewIndexContainer {...this.props} />
        </article>
      </div>
    );
  }
}

export default BookShow;
