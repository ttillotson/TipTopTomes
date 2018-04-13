class ShelfMembershipsController < ApplicationController
  def create
    @new_membership = ShelfMembership.new(shelf_member_params)

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
    params.require(:shelf_membership).permit(:book_id, :shelf_id)
  end
end
