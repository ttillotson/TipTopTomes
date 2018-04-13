import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import ShelfItem from './shelf_item';
import ShelfNavContainer from './shelf_nav_container';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
    const { shelf, loading, currentUser, deleteShelfItem, shelves } = this.props;

    if (loading){ return LoadingIcon(); }

    const isOwner = currentUser.id === this.props.match.params.userId;

    const membershipItems = Object.values(shelf.memberships).map(shelfItem => (
      <ShelfItem
        key={`shelfItem-${shelfItem.id}`}
        shelfItem={shelfItem}
        isOwner={isOwner}
        deleteShelfItem={deleteShelfItem}
        shelf={shelf}
      />
    ));

    return (
      <div className='bookshelf_container'>
        <section className='bookshelf_nav' >
          <h1>{ pageHeading }</h1>
          <ShelfNavContainer />
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
            </tr>
          </thead>
          <tbody>
              { membershipItems }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shelf;
