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

  has_many :reviews,
    through: :book

  def review
    self.reviews.find_by(author_id: current_user.id)
  end

  def handle_creation
    return unless self.valid? 
    default_member = self.user.default_membership(self.book_id)
    if !!default_member
      default_member.shelf_id = self.shelf_id 
    end
  end

  def handle_destruction
    # return if self.user != current_user
    if !!self.user.default_membership(self.book_id)
      shelf_members = self.user.shelf_memberships
                   .where(book_id: self.book_id)
      shelf_members.each do |book|
        book.destroy
      end
    end
  end
end
