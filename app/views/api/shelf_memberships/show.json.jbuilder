json.membership do 
  json.extract! @new_membership, :book, :shelf_id
end