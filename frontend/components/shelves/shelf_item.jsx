import React from 'react';
import { Link } from 'react-router-dom';

export default ({ shelfItem, deleteShelfItem, isOwner, shelf }) => {
  const book = shelfItem.book;
  const review = shelfItem.review;
  const addedAt = new Date(shelfItem.createdAt).toDateString().slice(4);
  let reviewId = null;
  if (review) { reviewId = review.id; }



  const bookShelves = Object.values(shelf.shelves).filter( singleShelf => 
    singleShelf.books.includes(book.id)
  );
  let names = bookShelves.map( aShelf =>  aShelf.name );
  let mapped = names.map((name, i) => <li key={`shelf-${i}`}>{ name }</li> );

  const shelves = (
      <ul>
        { mapped }
      </ul>
  );


  const editLink = (
    <td>
      <Link to={`/reviews/${book.id}/${reviewId}`}
      className='shelf_item_edit'
      >Edit Review</Link>
    </td>
  );
  const removeLink = (
    <td>
      <button onClick={() => deleteShelfItem(shelfItem.id)}
      className='shelf_item_remove'
      >&#10005</button>
    </td>
  );
  
  return(
    <tr className='bookshelf_item'>
      <td className='shelf_cover'>
        <img src={book.imgUrl} />
      </td>
      <td className='shelf_item_title'>{book.title}</td>
      <td className='shelf_item_author'>{book.author}</td>
      <td className='shelf_item_rating' >{book.avgRating}</td>
      <td>{ book.rating }</td>
      <td>{ shelves }</td>
      <td className='item_created_at'>{addedAt}</td>
      { isOwner ? editLink : null }
      { isOwner ? removeLink : null }
    </tr>
  );
};