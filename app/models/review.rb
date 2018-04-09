# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :text             not null #CAN BE NULL
#  rating     :integer
#  author_id  :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, :author_id, :book_id, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :book,
  class_name: :Book,
  foreign_key: :book_id
end
