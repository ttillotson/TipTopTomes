json.extract! @shelf, :name
json.memberships do 
  @shelf.memberships.each do |membership|
    json.set! membership.id do 
      json.extract! membership, :id, :created_at
      json.book do 
        json.partial! 'api/books/book', book: membership.book
      end

      current_user_review = membership.reviews.find_by(author_id: current_user.id)
      if current_user_review
        json.review do 
          json.extract! current_user_review, :id
        end
      end
    end
  end
end
