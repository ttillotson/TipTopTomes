import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import { Link } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.fetchBook(nextProps.match.params.bookId);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors([]);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitReview(this.state).then(() => {
      this.props.history.push(`/books/${this.props.book.id}`);
    });
  }

  render() {
    const { book, loading } = this.props;

    if (loading) { return <LoadingIcon />; }
    if (!book || !book.reviews) { return null; }

    return (
      <div className='review_form_container'>
        <div className='review_content'>
          <h1 className='review_book_title'>
            <Link to={`/books${book.id}`}>
              {book.title} </Link>
              > Review
          </h1>

          <section className='review_book_info'>
            <img src={book.imgUrl} />
            <article className='book_details'>
              <h2 className='title'>{book.title}</h2>
              <h3 className='author'>
                <span>by </span>
                {book.author}
              </h3>
            </article>
          </section>
        </div>
        <section className='review_content'>
          <form className='review_form' onSubmit={this.handleSubmit}>
            <fieldset className='form_item'>
              <legend className='rating'>
                My Rating:
                <select onChange={this.update('rating')}>
                  <option disabled selected> - </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </legend>
            </fieldset>



            <fieldset className='form_item'>
              <legend className='bookshelves'>
                Bookshelves
                <select onChange={this.update()}>
                  <option disabled selected>Read</option>
                  <option disabled value='1'>1</option>
                  <option disabled value='2'>2</option>
                  <option disabled value='3'>3</option>
                  <option disabled value='4'>4</option>
                  <option disabled value='5'>5</option>
                </select>
              </legend>
            </fieldset>

            <fieldset className='form_item'>
              <legend> What did you think?</legend>
              <textarea
                className='review_body'
                rows='12'
                placeholder='Enter your review'
                onChange={this.update('review')}
                value={this.state.review}
                />
            </fieldset>

            <button>Save</button>
          </form>
        </section>
      </div>
    );
  }
}

export default ReviewForm;
