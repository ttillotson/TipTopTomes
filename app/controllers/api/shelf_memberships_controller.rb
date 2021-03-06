class Api::ShelfMembershipsController < ApplicationController
  def create
    @new_membership = ShelfMembership.new
    @new_membership.book_id = params[:shelfItem][:bookId]
    @new_membership.shelf_id = params[:shelfItem][:shelfId]

    default_ids = current_user.default_shelves.map(&:id)
    existing = ShelfMembership
    .find_by(book_id: params[:shelfItem][:bookId].to_i, shelf_id: params[:shelfItem][:shelfId].to_i)
    existing_default = current_user.default_membership(params[:shelfItem][:bookId].to_i)
    if default_ids.include?(@new_membership.shelf_id) && existing_default
      existing_default.shelf_id = params[:shelfItem][:shelfId]
      @new_membership = existing_default
      @new_membership.save
      @shelf = Bookshelf.find(params[:shelfItem][:shelfId])
      @shelves = @new_membership.book.shelves
      render :show
    elsif existing 
      @new_membership = existing 
      @shelf = existing.shelf
      @shelves = @new_membership.book.shelves
      render :show
    elsif @new_membership.save
      @shelf = @new_membership.shelf
      @shelves = @new_membership.book.shelves
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
    params.require(:shelf_item).permit(:book_id, :shelf_id)
  end
end
