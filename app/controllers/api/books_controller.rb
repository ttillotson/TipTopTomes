class Api::BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.includes(reviews: [:user]).find(params[:id])
    if current_user 
      @user_memberships = current_user.memberships
      # current_user.memberships.includes(:shelf)
    end
    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end
end
