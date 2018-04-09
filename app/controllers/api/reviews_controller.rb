class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

  end

  def edit

  end

  def update
    @review = Review.find(params[:id])
    @book = @review.book
    if @review.update_attributes(review_params)
      render json: '/api/books/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    if @review
      @review.destroy
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
