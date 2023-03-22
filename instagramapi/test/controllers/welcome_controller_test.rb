require "test_helper"

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get addpost" do
    get welcome_addpost_url
    assert_response :success
  end
end
