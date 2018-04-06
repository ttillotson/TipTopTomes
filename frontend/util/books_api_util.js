export const fetchBooks = () => (
  $.ajax({
    url: `/api/books`,
    method: 'GET',
  })
);

export const fetchBook = (bookId) => (
  $.ajax({
    url: `/api/books/${bookId}`,
    method: 'GET'
  })
);
