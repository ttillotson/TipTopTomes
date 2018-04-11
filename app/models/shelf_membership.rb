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

  belongs_to :shelf,
  class_name: :Bookshelf,
  foreign_key: :shelf_id


  belongs_to :book
end
