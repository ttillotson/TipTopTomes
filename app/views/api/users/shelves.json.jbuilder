json.books do
  @user.shelves.each do |shelf|
    shelf.books.each do |book|
      json.partial! 'api/books/book', book: book
    end
  end
end
