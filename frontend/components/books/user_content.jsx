import React from 'react';
import { Link } from 'react-router-dom';

class  UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }

  render() {
    const { currentUser, book, reviews, status } = this.props;
    let userReview = undefined;
    let reviewComponent;
    let editReview;

    if (currentUser !== null) {
      userReview = reviews[currentUser.id];
    }

    if (userReview !== undefined){

      editReview = <Link to={`/reviews/${book.id}/${userReview.id}`}
                    className='add_review_link'>
                    Edit your Review
                    </Link>;

      // debugger
      let bookStatus= null;
      if (status) {
        bookStatus = status.name;
      }
      let shelves = null;
      if (book.shelves.length > 0){
        shelves = (
          <ul>
            { book.shelves.map((shelfStr, i) => <li key={`shelf-${i}`}>{shelfStr}</li>) } 
          </ul>
        );
      }


      reviewComponent = (
        <table>
          <tbody>
            <tr>
              <td className='row_key'>Review of</td>
              <td className='row_value'>{book.title}</td>
            </tr>
            <tr>
              <td className='row_key'>Rating</td>
              <td className='row_value'>{userReview.rating}</td>
            </tr>
            <tr>
              <td className='row_key'>Shelves</td>
              <td className='row_value'>{ shelves }</td>
            </tr>
            <tr>
              <td className='row_key'>Status</td>
              <td className='row_value'>{ bookStatus }</td>
            </tr>
            <tr>
              <td className='row_key'>Review</td>
              <td className='row_value'>{userReview.body}</td>
            </tr>
          </tbody>
        </table>
      );
    }

    const addReview = <Link to={`/reviews/${book.id}/new`}
      className='add_review_link'>Add a Review</Link>;

    return (
      <section className='user_content_container'>
        {(userReview !== undefined) ? reviewComponent : null }
        {(userReview !== undefined) ? editReview : addReview }
      </section>
    );
  }
}

export default UserContent;
