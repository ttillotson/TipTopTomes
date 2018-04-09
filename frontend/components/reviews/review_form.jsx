import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

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
    this.submitReview(this.state);
  }

  render() {

    return (
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
    );
  }
}

export default ReviewForm;
