json.partial! 'book', book: @book
json.reviews do
  @book.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :author_id, :book_id, :rating, :body
    end
  end
end
