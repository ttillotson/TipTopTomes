json.partial! 'book', book: @book
json.extract! @book, :average_rating
json.reviews do
  @book.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :book_id, :rating, :body
      json.user do
        json.extract! review.user, :id, :username
      end
    end
  end
end
