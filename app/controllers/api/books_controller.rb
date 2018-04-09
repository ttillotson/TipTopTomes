class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books
  end

  def show
    @book = Book.includes(reviews: [:user]).find(params[:id])
    if @book
      render "api/books/show"
    else
      render json: @book.errors.full_messages, status: 422
    end
  end
end
