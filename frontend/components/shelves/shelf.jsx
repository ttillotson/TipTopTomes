import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import ShelfItem from './shelf_item';
import ShelfNavContainer from './shelf_nav_container';

class Shelf extends React.Component {


  componentDidMount() {
    if (this.props.match.params.bookshelfId) {
      this.props.fetchShelf(this.props.match.params.bookshelfId);
    } else {
      this.props.fetchCombinedShelf(this.props.match.params.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookshelfId !== nextProps.match.params.bookshelfId) {
      if (nextProps.shelfType === 'Single') {
        nextProps.fetchShelf(nextProps.match.params.bookshelfId);
      } else if (nextProps.shelfType === 'Combined') {
        nextProps.fetchCombinedShelf(nextProps.match.params.userId);
      }
    }
  }



  componentWillUnmount() {
    this.props.clearErrors([]);
    this.props.clearShelf();
  }

  render() {
    const { shelf, loading, currentUser, deleteShelfItem, shelves } = this.props;

    if (loading){ return LoadingIcon(); }
    if (Object.keys(shelf).length < 1) return null;
    let isOwner;
    if (currentUser) {
      isOwner = `${currentUser.id}` === this.props.match.params.userId;
    } else {
      isOwner = false;
    }

    let pageHeading;

    if (this.props.shelfType === 'Single'){
      pageHeading = `${shelf.owner}'s ${shelf.name} Bookshelf`;
    } else {
      pageHeading = `${shelf.owner}'s Combined Bookshelf`;
    }
    let memberships = [];
    if (shelf.memberships) {
      memberships = Object.values(shelf.memberships);
    }
    
    const membershipItems = memberships.map(shelfItem => (
      <ShelfItem
        key={`shelfItem-${shelfItem.id}`}
        shelfItem={shelfItem}
        isOwner={isOwner}
        deleteShelfItem={deleteShelfItem}
        shelf={shelf}
      />
    ));

    return (
      <div className='bookshelf_page'>
        <h1 className='heading'>{ pageHeading }</h1>
        <section className='bookshelf_container'>
          <section className='bookshelf_nav' >
            <h3>Bookshelves</h3>
            <ShelfNavContainer isOwner={isOwner} />
          </section>
          <table className='bookshelf'>
            <colgroup>
              <col className='cover' />
              <col className='title' />
              <col className='author' />
              <col className='avg_rating' />
              <col className='rating' />
              <col className='shelves' />
              <col className='date_added' />
              <col className='edit_link' />
              <col className='remove_link' />
            </colgroup>
            <thead>
              <tr>
                <th>cover</th>
                <th>title</th>
                <th>author</th>
                <th>avg rating</th>
                <th>rating</th>
                <th>shelves</th>
                <th>date added</th>
                <th>  </th>
                <th>  </th>
              </tr>
            </thead>
            <tbody>
                { membershipItems }
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default Shelf;
