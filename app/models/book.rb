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

end
