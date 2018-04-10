json.extract! @review, :id, :body, :rating, :book_id, :author_id
json.book @review.book
