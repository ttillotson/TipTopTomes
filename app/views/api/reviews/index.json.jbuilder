@book.reviews.each do |review|
  json.set! review.user.id do
    json.partial! 'review', review: review
    end
end
