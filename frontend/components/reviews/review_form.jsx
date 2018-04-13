import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import { Link } from 'react-router-dom';
import { snakeCase } from 'lodash';
import ShelfItemFormContainer from '../shelves/shelf_item_form_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    if (this.props.book === undefined){
      this.props.requestBook(this.props.match.params.bookId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.props.review);
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
    this.props.submitReview(this.state).then(() =>
      this.props.history.push(`/books/${this.props.book.id}`)
    );
  }

  render() {
    const { review, loading, book } = this.props;
    if (loading) { return <LoadingIcon />; }
    if (!book) { return null; }
    if (!review) { return <LoadingIcon />; }







    return (
      <div className='review_form_container'>
        <div className='review_content'>
          <h1 className='review_book_title'>
            <Link to={`/books/${book.id}`}>
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
                <select value={this.state.rating}
                  onChange={this.update('rating')}
                  >
                  <option disabled defaultValue value='0'>-</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </legend>
            </fieldset>

            <fieldset className='form_item'>
              <legend> What did you think?</legend>
              <textarea
                className='review_body'
                rows='12'
                placeholder='Enter your review'
                onChange={this.update('body')}
                value={this.state.body}
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
