json.extract! shelf, :name

json.memberships do 
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

      current_user_review = membership.book
      .reviews.select{ |review| review.author_id == current_user.id }[0]
      if current_user_review
        json.review do 
          json.extract! current_user_review, :id, :rating
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

