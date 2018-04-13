json.book do 
  json.partial! 'book', book: @book
  json.extract! @book, :average_rating, :description, :published, :ISBN
end
json.reviews do 
  @book.reviews.each do |review|
    json.set! review.author_id do
      json.extract! review, :id, :book_id, :rating, :body
      json.user do
        json.extract! review.user, :id, :username
      end
    end
  end
end
if current_user
  json.active_default_books do 
    @user_default_memberships.each do |shelf|
      shelf.each do |membership|
        json.set! membership.book_id do 
          json.name membership.shelf.name 
          json.shelf_id membership.shelf_id
        end
      end
    end
  end
  json.active_shelves do 
    json.array! shelves do |shelf|
      json.extract! shelf, shelf.name shelf.book_ids
    end
end