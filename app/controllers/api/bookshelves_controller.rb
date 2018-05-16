class Api::BookshelvesController < ApplicationController
  before_action :require_sign_in, only: [:create, :update]

  def index
    @shelves = Bookshelf.includes(books: [:reviews]).where(user_id: params[:user_id])
    @shelf = @shelves.zip
    @books = @shelves.map{ |shelf| shelf.book_ids }.flatten
    @user_default_memberships = current_user.default_books
    @user_made_shelves = current_user.shelves.includes(:books).offset(3)
    @user_default_shelves = current_user.shelves.includes(:books).limit(3)


    render 'api/bookshelves/combined'
  end

  def show
    @shelf = Bookshelf.includes(books: [:reviews]).find(params[:id])
    @shelves = @shelf.user.shelves.includes(:memberships)
    @user_default_memberships = current_user.default_books
    @user_made_shelves = current_user.shelves.includes(:books).offset(3)
    @user_default_shelves = current_user.shelves.includes(:books).limit(3)
    if @shelf 
      render :show 
    else
      render json: ['Bookshelf not found.'], status: 404
    end
  end

  def create
    @shelf = Bookshelf.new(bookshelf_params)
    @shelf.user_id = current_user.id
    @shelves = @shelf.user.shelves.includes(:memberships)
    @user_default_memberships = current_user.default_books
    @user_made_shelves = current_user.shelves.includes(:books).offset(3)
    @user_default_shelves = current_user.shelves.includes(:books).limit(3)

    if @shelf.save!
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def update
    @shelf = Bookshelf.find(params[:shelf][:id])
    @shelf.name = params[:shelf][:name]
    if @shelf.save
      @shelves = @shelf.user.shelves.includes(:memberships)
      @user_default_memberships = current_user.default_books
      @user_made_shelves = current_user.shelves.includes(:books).offset(3)
      @user_default_shelves = current_user.shelves.includes(:books).limit(3)
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf = current_user.shelves.find(params[:id])
    @shelf.destroy
  end

  private

  def bookshelf_params
    params.require(:shelf).permit(:user_id, :name, :id)
  end
end
