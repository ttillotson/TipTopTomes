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
  
  componentWillReceiveProps(nextProps) {
    let currentShelves = Object.keys(this.props.shelf.shelves);
    let nextShelves = Object.keys(nextProps.shelf.shelves);
    const isEqual = function (arr1, arr2) {
      if (arr1.length !== arr2.length ) return false;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
      }
      return true;
    };
    if (!isEqual(currentShelves, nextShelves)) {
      this.setState({ addForm: false });
    }

    if (this.props.match.params.bookshelfId) {
      this.props.fetchShelf(this.props.match.params.bookshelfId);
    } else {
      this.props.fetchCombinedShelf(this.props.match.params.userId);
    }
  }

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

