
# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text             not null
#  ISBN        :string           not null
#  img_url     :string           not null
#  published   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, :description, :ISBN, :img_url, :published, presence: true

  has_many :reviews,
  class_name: Review,
  foreign_key: :book_id

  def ratings
    self.reviews.map(&:rating)
  end

  def average_rating
    self.ratings.reduce(:+).to_f / self.ratings.length
  end
end
