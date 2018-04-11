json.extract! review, :id, :body, :rating, :book_id, :author_id
json.user do
  json.username review.user.username
  json.id review.user.id
end
