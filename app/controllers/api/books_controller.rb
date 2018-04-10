class Api::BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.includes(reviews: [:user]).find(params[:id])
    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end
end
