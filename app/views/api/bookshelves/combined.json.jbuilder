@shelves.each do |shelf|
  json.shelves do 
    json.set! shelf.id do 
      json.name shelf.name
      json.num_books shelf.book_ids.length
    end
  end
end

json.all_books do 
  json.array! @books
end