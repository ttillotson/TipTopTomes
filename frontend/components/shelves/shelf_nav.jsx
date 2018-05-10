import React from 'react';
import { Link } from 'react-router-dom';
import AddShelfForm from './add_shelf_form';
import ShelfListItemContainer from './shelf_list_item_container';

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
    const { createShelf, deleteShelf, updateShelf, clearErrors, isOwner, shelf } = this.props;
    let shelves = Object.values(shelf.shelves);
    let shelfIds = Object.keys(shelf.shelves);
    let shelvesInfo = shelves.map((aShelf, i )=> [ shelfIds[i], aShelf.name, aShelf.books.length] );

    let shelfOwner = this.props.match.params.userId;

    let shelfItems = shelvesInfo.map(info => 
      <ShelfListItemContainer info={info} 
                    owner={shelfOwner} 
                    isOwner={isOwner}
                    key={`shelf-${info[1]}`}
                    />
    );

    const addShelfForm = <AddShelfForm clearErrors={clearErrors} shelfAction={createShelf} />;
    
    let addButton = <tr><td><button onClick={() => this.update()}  className='add_shelf' >Add Shelf</button></td></tr>;
    
    let addButtonLogic = this.state.addForm ? addShelfForm : addButton; 
    
    return (
      <table>
        <tbody>
          { shelfItems }
          { isOwner ? addButtonLogic : null }
        </tbody>
      </table>
    );
  }
}

export default ShelfNav;
