require_relative 'generic_book_info'

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
#  published   :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, :description, :ISBN, :img_url, :published, presence: true

  after_initialize :ensure_description, :ensure_image_url

  has_many :reviews

  private

  def ensure_image_url
    self.img_url ||= IMAGE_URL_ARRAY.sample
  end

  def ensure_description
    self.description ||= DESCRIPTION.sample
  end
end
