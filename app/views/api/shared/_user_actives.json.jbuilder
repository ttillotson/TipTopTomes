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
        json.array! user_default_shelves do |shelf|
        json.extract! shelf, :name, :book_ids
        end
    end
    json.active_made_shelves do 
        json.array! user_made_shelves do |shelf|
        json.extract! shelf, :name, :book_ids
        end
    end
end