class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null:false
      t.integer :rating
      t.integer :author_id, null:false
      t.integer :book_id, null:false

      t.timestamps
    end
    add_index :reviews, [:book_id, :author_id], unique: true
    add_index :reviews, :author_id, unique: true
    add_index :reviews, :book_id, unique: true
  end
end
