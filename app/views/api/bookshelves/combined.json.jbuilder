@shelves.each do |shelf|
  json.set! shelf.name do 
    json.books shelf.book_ids
  end
end
