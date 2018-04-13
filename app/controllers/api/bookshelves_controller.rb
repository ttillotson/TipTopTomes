class Api::BookshelvesController < ApplicationController
  before_action :require_sign_in, only: [:create, :update]

  def index
    @shelves = Bookshelf.includes(books: [:reviews]).where(user_id: params[:user_id])
    @shelf = @shelves.zip
    @books = @shelves.map{|shelf| shelf.book_ids}.flatten

    render 'api/bookshelves/combined'
  end

  def show
    @shelf = Bookshelf.includes(books: [:reviews]).find(params[:id])
    @shelves = @shelf.user.shelves.includes(:memberships)

    if @shelf 
      render :show 
    else
      render json: ['Bookshelf not found.'], status: 404
    end
  end

  def create
    @shelf = Bookshelf.new(bookshelf_params)
    @shelf.user_id = current_user.id
    debugger
    if @shelf.save!
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf = current_user.bookshelves.find(params[:id])
    @shelf.destroy
  end

  private

  def bookshelf_params
    params.require(:shelf).permit(:user_id, :name)
  end
end
