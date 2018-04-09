// export const fetchReview = (review) => (
//   $.ajax({
//     url: `/books/${review.book_id}/reviews/${review.id}`
//   })
// );

export const createReview = (review) => (
  $.ajax({
    url:`/api/books/${review.bookId}/reviews`,
    method: 'POST',
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    url: `/api/books/${review.bookId}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    url: `/api/books/${review.bookId}/reviews/${review.id}`,
    method: 'DELETE',
    data: `${review.id}`
  })
);
