require_relative 'book_info'

def shelf_seeds
  @read_array = []
  @will_read_array = []
  @reading_array = []
  
  BOOKS.length.times do |book_idx|
    book_id = book_idx + 1
    if book_id % 17 == 0
      @reading_array << book_id
      next
    elsif book_id % 7 == 0
      @will_read_array << book_id
      next
    elsif book_id % 3 == 0
      @read_array << book_id
      next
    end
  end
  17.times do |user_count|
    [@read_array, @will_read_array, @reading_array].each_with_index do |shelf_array, i|      
      shelf_array.each do |book_id|
        ShelfMembership.create(shelf_id: ((i + 1) + (user_count * 3)),
                               book_id: book_id)
      end
    end
  end
end



# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 55)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 45)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 37)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 96)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 71)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 1)
# ShelfMembership.create(shelf_id:(2 * user_count) , book_id: 5)
# ShelfMembership.create(shelf_id:(2 * user_count) , book_id: 19)
# ShelfMembership.create(shelf_id:(2 * user_count) , book_id: 18)
# ShelfMembership.create(shelf_id:(2 * user_count) , book_id: 43)
# ShelfMembership.create(shelf_id:(2 * user_count) , book_id: 112)
# ShelfMembership.create(shelf_id:(1 * user_count) , book_id: 26)
# ShelfMembership.create(shelf_id:(3 * user_count) , book_id: 31)
# ShelfMembership.create(shelf_id:(3 * user_count) , book_id: 77)
