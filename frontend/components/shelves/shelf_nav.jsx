import React from 'react';
import { Link } from 'react-router-dom';

class ShelfNav extends React.Component {
  componentWillReceiveProps(nextProps) {
    debugger
  }

  render () {
    let shelves = Object.values(this.props.shelf.shelves);
    let shelfIds = Object.keys(this.props.shelf.shelves);
    let shelvesInfo = shelves.map((aShelf, i )=> [ shelfIds[i], aShelf.name, aShelf.books.length] );

    let shelfOwner = this.props.match.params.userId;

    let shelfItems = shelvesInfo.map(info => 
      <li key={`shelf-${info[1]}`}>
        <Link to={`/bookshelf/${shelfOwner}/${info[0]}`}>{info[1]}</Link> <span>{info[2]}</span>
      </li> 
    );

    return (
      <ul>
        { shelfItems }
      </ul>
    );
  }
}

export default ShelfNav;

