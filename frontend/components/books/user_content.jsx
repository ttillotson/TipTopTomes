import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, bookId, bookTitle }) => {

  let userReview = undefined;
  let reviewComponent;

  if (user !== null) {userReview = user.reviews[bookId];

     reviewComponent = (
        <table>
          <tbody>
            <tr>
              <td className='row_key'>Review of</td>
              <td className='row_value'>{bookTitle}</td>
            </tr>
            <tr>
              <td className='row_key'>Rating</td>
              <td className='row_value'>{userReview.rating}</td>
            </tr>
            <tr>
              <td className='row_key'>Shelves</td>
              <td className='row_value'></td>
            </tr>
            <tr>
              <td className='row_key'>Status</td>
              <td className='row_value'></td>
            </tr>
            <tr>
              <td className='row_key'>Review</td>
              <td className='row_value'>{userReview.body}</td>
            </tr>
          </tbody>
        </table>
    );
  }

  return (
    <section className='user_content_container'>
      {(userReview !== undefined) ? reviewComponent : null}
      <Link to={`/reviews/${bookId}/new`} className='add_review_link'>
        Add a Review</Link>
    </section>
  );
};
