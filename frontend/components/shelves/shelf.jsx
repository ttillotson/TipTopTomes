import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import ShelfItem from './shelf_item';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    if (this.props.match.params.bookshelfId) {
      this.props.fetchShelf(this.props.match.params.bookshelfId);
    } else {
      this.props.fetchCombinedShelf(this.props.match.params.userId);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors([]);
    this.props.clearShelf();
  }

  render() {
    const { shelf, loading } = this.props;

    if (loading) return LoadingIcon;

    const isOwner = 

    const membershipItems = shelf.memberships.map(shelfItem => (
      <ShelfItem  
        shelfItem={shelfItem}
        isOwner={isOwner}
        deleteShelfItem={deleteShelfItem}
      />
    ));

    return (
      <div className='bookshelf'>
        <h1>Bookshelf</h1>
      </div>
    );
  }
}

export default Shelf;
