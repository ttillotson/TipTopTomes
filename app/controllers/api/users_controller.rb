class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render '/api/books/index'
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
