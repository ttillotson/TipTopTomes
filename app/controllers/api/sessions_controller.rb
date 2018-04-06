class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render 'api/users/show'.to_json
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render json: '/api/books'.to_json
    else
      render json: ['Nobody is currently signed in.'], status: 404
    end
  end
end
