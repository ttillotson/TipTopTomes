require 'test_helper'

class ShelfMembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get shelf_memberships_create_url
    assert_response :success
  end

  test "should get destroy" do
    get shelf_memberships_destroy_url
    assert_response :success
  end

end
