json.partial! 'book', book: @book
json.extract! @book, :average_rating
json.reviews do
  @book.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :book_id, :rating, :body
      json.extract! review, :user
    end
  end
end
