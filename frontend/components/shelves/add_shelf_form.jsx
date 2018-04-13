import React from 'react';
import { Link } from 'react-router-dom';


class AddShelfForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillUnmount() {
    this.props.clearErrors([]);
  }

  update(e){
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitReview(this.state);
  }

  render() {
    const { review, loading, book } = this.props;
    if (loading) { return <LoadingIcon />; }
    if (!book) { return null; }
    if (!review) { return <LoadingIcon />; }

    return (
      <form className='add_shelf_form'>

      </form>
    );
  }
}

export default AddShelfForm;