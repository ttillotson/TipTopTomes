class CreateShelfMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :shelf_memberships do |t|
      t.integer :book_id, null: false
      t.integer :shelf_id, null: false

      t.timestamps
    end
    add_index :shelf_memberships, :book_id
    add_index :shelf_memberships, :shelf_id
    add_index :shelf_memberships, [:shelf_id, :book_id]
  end
end
