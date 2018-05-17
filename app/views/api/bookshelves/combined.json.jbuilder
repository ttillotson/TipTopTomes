@shelves.each do |shelf|
  json.partial! 'api/bookshelves/shelf', shelf: shelf, shelves: @shelves
end
