require 'byebug'

class Api::ShelfMembershipsController < ApplicationController
  def create
    # debugger
    @new_membership = ShelfMembership.new
    @new_membership.book_id = params[:shelfItem][:bookId]
    @new_membership.shelf_id = params[:shelfItem][:shelfId]

    default_ids = current_user.default_shelves.map(&:id)
    
    existing_default = current_user.default_membership(params[:shelfItem][:bookId].to_i)
    if default_ids.include?(@new_membership.shelf_id) && existing_default
      existing_default.shelf_id = params[:shelfItem][:shelfId]
      @new_membership = existing_default
      @new_membership.save
      @shelf = Bookshelf.find(params[:shelfItem][:shelfId])
      # debugger
      render :show
    elsif @new_membership.save
      @shelf = @new_membership.shelf
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

# Create

# Check if an existing default book membership exists if new shelf is a default
# If yes: update it 
# If not: create a new 1