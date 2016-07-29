class CategoriesController < ApplicationController

  load_and_authorize_resource

  def index
  	@categories=Category.all
  	@category=Category.new
  end

  def new
    @category=Category.new
  end

  def create
    @category =Category.create!(category_params)

    if @category.parent_id != nil
      @category.move_to_child_of(@category.parent_id)
    end

    if @category.save
      flash[:success] = 'Category was successfully created.'
    else
      flash[:danger] = 'There was a problem creating the Category.'
    end
    @category = Category.new
  end

  def show
    @category=Category.find(params[:id])
  end

  def get_category
    @category=Category.find(params[:id])

    respond_to do |format|
      format.html { @category }
      format.js { render json: @category.to_json }
    end
  end

  def edit
    @category=Category.find(params[:id])
  end

  def update
    @category=Category.find(params[:id])
      if @category.update_attributes(category_params)
        flash[:success] = 'Category was successfully updated.'
      else
        flash[:danger] = 'There was a problem updating the Category.'
      end
  end

  def destroy
    @category = Category.find(params[:id])
      if @category.destroy
        flash[:danger] = 'Category was successfully destroyed.'
      else
        flash[:danger] = 'There was a problem deleting the Category.'
      end
  end

  def history
    @versions = PaperTrail::Version.order('created_at DESC')
  end

  private
  	def category_params
    	params.require(:category).permit(:name,:parent_id)
 	 end
end
