export const fetchShelf = (shelfId) => (
  $.ajax({
    url: `/api/bookshelves/${shelfId}`,
    method: 'GET'
  })
);

export const fetchCombinedShelf = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/bookshelves`,
    method: 'GET'
  })
);

export const createShelf = (shelf) => (
  $.ajax({
    url: `/api/bookshelves/`,
    method: 'POST',
    data: { shelf }
  })
);

export const updateShelf = (shelf) => (
  $.ajax({
    url: `/api/bookshelves/${shelf.id}`,
    method: 'PATCH',
    data: { shelf }
  })
);

export const removeShelf = (shelfId) => (
  $.ajax({
    url: `/api/bookshelves/${shelfId}`,
    method: 'DELETE'
  })
);