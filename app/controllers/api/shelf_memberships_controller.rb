require 'byebug'

class Api::ShelfMembershipsController < ApplicationController
  def create
    # debugger
    @new_membership = ShelfMembership.new
    @new_membership.book_id = params[:shelfItem][:bookId]
    @new_membership.shelf_id = params[:shelfItem][:shelfId]
    if @new_membership.save
      render :show
    else
      render @new_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @new_membership = ShelfMembership.find_by(shelf_member_params)
    if @new_membership
      @new_membership.destroy
    else
      render json: ['Could not find book in your shelves.'], status: 404
    end
  end

  private 

  def shelf_member_params 
    params.require(:shelfItem).permit(:bookId, :shelfId)
  end
end
