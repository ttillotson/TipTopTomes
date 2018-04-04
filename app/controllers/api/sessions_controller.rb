class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      [:user][:email],
      [:user][:password]
    )
    if @user
      sign_in(@user)
      render 'api/books'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      signout
      render json: 'api/books'
    else
      render json: ['Nobody is currently signed in.'], status: 404
    end
  end
end
