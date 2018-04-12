# == Schema Information
#
# Table name: shelf_memberships
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  shelf_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShelfMembership < ApplicationRecord
  before_save :handle_creation 
  before_destroy :handle_destruction

  belongs_to :shelf,
    class_name: :Bookshelf,
    foreign_key: :shelf_id

  has_one :user,
    through: :shelf

  belongs_to :book

  def handle_creation
    break unless self.valid? 
    default_member = self.user.default_membership(self.book_id)
    default_member.destroy if !!default_member
  end

  def handle_destruction
    if !!self.user.default_membership(self.book_id)
      shelf_members = self.user.shelf_memberships
                   .where(book_id: self.book_id)
      shelf_members.each do |book|
        book.destroy
      end
    end
  end
end
