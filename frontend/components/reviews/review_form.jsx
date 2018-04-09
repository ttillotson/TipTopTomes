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
    this.props.fetchBook(this.props.params.match.bookId);
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
    const book = this.props.book;
    return (
      <div className='review_form_container'>
        <div className='review_content'>
          <h1 className='review_book_title'>
            <Link to={`/books${book.id}`}>
              {book.title} Review
            </Link>
          </h1>

          <section className='review_book_info'>
            <img src={book.imgUrl} />
            <article className='book_details'>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </article>
          </section>

          <form className='review_form' onSubmit={this.handleSubmit}>
            <label htmlFor='review_rating'>My Rating</label>
            <input type="radio" name='review_rating'
              onClick={this.update('rating')} value="1" />
            <input type="radio" name='review_rating'
              onClick={this.update('rating')} value="2" />
            <input type="radio" name='review_rating'
              onClick={this.update('rating')} value="3" />
            <input type="radio" name='review_rating'
              onClick={this.update('rating')} value="4" />
            <input type="radio" name='review_rating'
              onClick={this.update('rating')} value="5" />

            <label>
              Bookshelves

            </label>

            <label> What did you think?
              <input
                type='textarea'
                placeholder='Enter your review (optional)'
                onChange={this.update('review')}
                value={this.state.review}
                />
            </label>

            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
