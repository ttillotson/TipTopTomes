export const fetchReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'GET'
  })
);

export const fetchReviews = (bookId) => (
  $.ajax({
    url: `/api/books/${bookId}/reviews`,
    method: 'GET'
  })
);

export const createReview = (review) => (
  $.ajax({
    url:`/api/reviews`,
    method: 'POST',
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'DELETE',
  })
);
