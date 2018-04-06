class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description, null: false
      t.string :ISBN, null: false
      t.string :img_url, null: false
      t.string :published, null: false

      t.timestamps
    end
    add_index :books, [:author, :title], unique: true
    add_index :books, :ISBN, unique: true
    add_index :books, :author
    add_index :books, :title
  end
end
