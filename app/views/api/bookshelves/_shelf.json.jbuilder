if shelf.name 
  json.extract! shelf, :name
else 
  json.name 'All Books'
end
json.memberships do 
  shelf.memberships.each do |membership|
    json.set! membership.id do 
      json.extract! membership, :id, :created_at
      json.book do 
        json.partial! 'api/books/book', book: membership.book
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
      json.num_books shelf.books.length
    end
  end
end

