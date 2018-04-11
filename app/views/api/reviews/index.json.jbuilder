@book.reviews.each do |review|
  json.set! review.user.id do
    json.partial! 'review', review: review
    json.user do
      json.username review.user.username
      json.id review.user.id
    end
  end
end
