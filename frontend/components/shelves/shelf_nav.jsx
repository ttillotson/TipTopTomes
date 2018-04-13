import React from 'react';
import { Link } from 'react-router-dom';
import AddShelfForm from './add_shelf_form';

class ShelfNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: false
    };
  }


  // componentWillReceiveProps(nextProps) {
  //   debugger;
  // }

  update() {
    this.setState({ addForm: true });
  }

  render () {
    const { createShelf, clearErrors, isOwner, shelf } = this.props;
    let shelves = Object.values(shelf.shelves);
    let shelfIds = Object.keys(shelf.shelves);
    let shelvesInfo = shelves.map((aShelf, i )=> [ shelfIds[i], aShelf.name, aShelf.books.length] );

    let shelfOwner = this.props.match.params.userId;

    let shelfItems = shelvesInfo.map(info => 
      <li key={`shelf-${info[1]}`}>
        <Link to={`/bookshelf/${shelfOwner}/${info[0]}`}>{info[1]}</Link>   <span>({info[2]})</span>
      </li> 
    );

    const addShelfForm = <AddShelfForm clearErrors={clearErrors} createShelf={createShelf} />;
    
    let addButton = <button onClick={() => this.update()}  className='add_shelf' >Add Shelf</button>;
    
    let addButtonLogic = this.state.addForm ? addShelfForm : addButton; 
    

    return (
      <ul>
        { shelfItems }
        { isOwner ? addButtonLogic : null }
      </ul>
    );
  }
}

export default ShelfNav;

