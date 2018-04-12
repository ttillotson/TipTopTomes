# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :user_id, :name, presence: true

  belongs_to :user

  has_many :memberships,
  class_name: :ShelfMembership,
  foreign_key: :shelf_id,
  dependent: :destroy,
  inverse_of: :shelf

  has_many :books,
  through: :memberships

  def ensure_unique_shelving(book_id)
    shelf_owner = self.user
    if is_default_shelf?
      shelf_book = shelf_owner.default_memberships.find_by(book_id: book_id)
      shelf_book.destroy if shelf_book
    end
  end

  def owner?
    self.user == current_user
  end

  private

  def is_default_shelf?
    self.user.default_shelves.include?(self)
  end
end
