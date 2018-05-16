json.extract! user, :id, :username, :email
json.reviews do
  user.reviews.each do |review|
    json.set! review.book_id do
      json.extract! review, :id, :rating, :body
    end
  end
end
json.defaultShelves do 
  user.default_shelves.each do |shelf|
    json.set! shelf.id do 
      json.extract! shelf, :id, :name
    end
  end
end

# json.bookshelves user.bookshelves.pluck(:id)
