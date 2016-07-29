class PhotographsController < ApplicationController
  before_filter :authenticate_user!, only: [:new, :create]

  def index
    @photographs = Photograph.all
  end

  def new
    @photograph = Photograph.new
  end

  def create
    @photograph = Photograph.new(safe_photograph_params)

    if @photograph.save
      flash[:notice] = "You've uploaded a photograph!"
      redirect_to albums_path
    else
      render :new
    end
  end

  def show
    @photograph = Photograph.find(params[:id])
  end

  private
  def safe_photograph_params
    params.require(:photograph).permit(:img,:album_id)
end
end
