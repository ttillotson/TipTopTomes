class Api::SessionsController < ApplicationController
  def create

    @user = User.includes(:reviews).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
    else
      render json: ['Nobody is currently signed in.'], status: 404
    end
  end
end
