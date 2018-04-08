@books.each do |book|
  json.set! book.id do
    json.partial! 'book', book: book
  end
end
