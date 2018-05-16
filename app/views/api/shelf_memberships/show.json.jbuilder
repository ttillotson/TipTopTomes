# json.extract! @new_membership, :book_id, :shelf
json.status do 
  json.set! @new_membership.book_id do 
    json.extract! @shelf, :name
    json.extract! @new_membership, :shelf_id
  end
end
debugger
json.shelf do 
  json.extract! @new_membership, :book_id, :shelf_id
end

json.shelves do 
  json.array! @shelves.pluck(:id)
end

