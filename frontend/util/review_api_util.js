export const fetchReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
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

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE',
    data: `${reviewId}`
  })
);
