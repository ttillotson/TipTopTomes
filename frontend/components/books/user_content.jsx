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

      let bookStatus= null;
      if (status) {
        bookStatus = status.name;
      }
      let shelfItems = null;

      // if (book.shelves && Object.values(book.shelves).length > 0){
      //   shelves = (
      //     <ul>
      //       {Object.values(book.shelves).map((shelfObj, i) => <li key={`shelf-${i}`}>{shelfObj.name}</li>) } 
      //     </ul>
      //   );
      // debugger;

      if (book.shelves && book.shelves.length > 0) {
        shelfItems = (
          <ul>
            {book.shelves.map((id) => <li key={`shelf-${id}`}>{this.props.shelves[id].name}</li>) } 
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
            {/* <tr>
              <td className='row_key'>Shelves</td>
              <td className='row_value'>{ shelfItems }</td>
            </tr> */}
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
