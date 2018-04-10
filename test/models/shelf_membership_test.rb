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

require 'test_helper'

class ShelfMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
