if current_user
    json.active_default_books do 
        user_default_memberships.each do |shelf|
            shelf.each do |membership|
                json.set! membership.book_id do 
                    json.name membership.shelf.name 
                    json.shelf_id membership.shelf_id
                end
            end
        end
    end
    json.active_default_shelves do 
        user_default_shelves.each do |shelf|
            json.set! shelf.id do 
                json.extract! shelf, :name, :book_ids
            end
        end
    end
    json.active_made_shelves do 
        user_made_shelves.each  do |shelf|
            json.set! shelf.id do 
                json.extract! shelf, :id, :name, :book_ids
            end
        end
    end
end