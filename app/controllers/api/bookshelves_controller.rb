class Api::BookshelvesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update]

  def show
    @bookshelf = Bookshelf.find(params[:id])

  end

  def create
    @bookshelf = Bookshelf.new
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render :show
    else
      render json: 'api/bookshelf/user_id'
    end
  end

  def destroy
    @bookshelf = current_user.bookshelves.find(params[:id])
    @bookshelf.destroy
    render json: 'api/bookshelf/user_id'
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:user_id)
  end
end
