json.extract! shelf, :name
username = shelf.user.username
json.owner  username
json.memberships do 
  if shelf.memberships.length > 1
    shelf.memberships.each do |membership|
      owner_review = membership.book.reviews
            .select{ |review| review.author_id == membership.user.id }[0]
      
      json.set! membership.id do 
        json.extract! membership, :id, :created_at
        json.book do 
          json.partial! 'api/books/book', book: membership.book
          json.avg_rating membership.book.average_rating
          json.rating owner_review.rating if owner_review
        end

        if current_user
          current_user_review = membership.book
          .reviews.select{ |review| review.author_id == current_user.id }[0] 
        end

        if current_user_review
          json.review do 
            json.extract! current_user_review, :id, :rating
          end
        end
      end
    end
  end
end
shelves.each do |shelf|
  json.shelves do 
    json.set! shelf.id do 
      json.name shelf.name
      json.books shelf.book_ids
    end
  end
end
json.partial! 'api/shared/user_actives',
  user_made_shelves: @user_made_shelves,
  user_default_shelves: @user_default_shelves, 
  user_default_memberships: @user_default_memberships
