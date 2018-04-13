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
    this.props.createShelf(this.state);
  }

  render() {


    return (
      <form className='add_shelf_form' onSubmit={this.handleSubmit}>
        <input className='shelf_input' type="text" value={this.state.name}/>
        <button className='add_shelf'>Add</button>
      </form>
    );
  }
}

export default AddShelfForm;