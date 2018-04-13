json.book do 
  json.partial! 'book', book: @book
  json.extract! @book, :average_rating, :description, :published, :ISBN
  if current_user 
    json.shelves do 
      @book_shelves.each do |shelf|
        json.set! shelf.id do 
          json.extract! shelf, :id, :name 
        end
      end
    end
  end
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


json.partial! 'api/shared/user_actives',
  user_made_shelves: @user_made_shelves,
  user_default_shelves: @user_default_shelves, 
  user_default_memberships: @user_default_memberships