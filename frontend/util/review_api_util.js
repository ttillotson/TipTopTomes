export const createReview = (review) => (
  $.ajax({
    url:`/books/${review.book_id}/reviews`,
    method: 'POST',
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    url: `/books/${review.book_id}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    url: `/books/${review.book_id}/reviews/${review.id}`,
    method: 'DELETE',
    data: `${review.id}`
  })
);
