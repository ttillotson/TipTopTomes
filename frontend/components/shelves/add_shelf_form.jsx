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
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors([]);
  }

  componentDidMount() {
    debugger;
    if (this.props.info) {
      this.setState({ 
        name: this.props.info[1],
        id: this.props.info[0]
      });
    }
  }

  update(e){
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.shelfAction(this.state);
  }

  render() {

    let button;

    if (this.props.info) {
      button = <button className='add_shelf'>Update</button>
    } else {
      button = <button className='add_shelf'>Add</button>
    }

    return (
      <tr>
        <td>
          <form className='add_shelf_form' onSubmit={this.handleSubmit}>
            <input onChange={this.update} 
            className='shelf_input' 
            type="text" 
            maxLength='20'
            value={this.state.name}
            />
            { button }
          </form>
        </td>
      </tr>
    );
  }
}

export default AddShelfForm;