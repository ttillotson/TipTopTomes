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
  before_save :ensure_creation 
  before_destroy :ensure_destruction

  belongs_to :shelf,
  class_name: :Bookshelf,
  foreign_key: :shelf_id

  has_one :owner,
  through: :shelf

  belongs_to :book

  def ensure_creation

  end

  def ensure_destruction

  end
end
