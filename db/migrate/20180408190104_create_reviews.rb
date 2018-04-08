class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body
      t.integer :rating
      t.integer :author_id
      t.integer :book_id

      t.timestamps
    end
    add_index :reviews, [:book_id, :author_id], unique: true
    add_index :reviews, :author_id, unique: true
    add_index :reviews, :book_id, unique: true
  end
end
