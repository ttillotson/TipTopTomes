json.book do
  json.partial! 'book', book: @book
  json.reviews do
    @book.reviews.each do |review|
      json.set! review.id do
        json.extract! book, :id, :author, :book_id, :rating, :body
      end
    end
  end
end
