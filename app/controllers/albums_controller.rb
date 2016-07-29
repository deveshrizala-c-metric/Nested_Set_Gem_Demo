class AlbumsController < ApplicationController
  before_filter :authenticate_user!, only: [:index, :new, :create]

  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    @album = Album.new(safe_album_params)

    if @album.save
      flash[:notice] = "You've uploaded a album!"
      redirect_to new_photograph_path
    else
      render :new
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  private
  def safe_album_params
    params.require(:album).permit(:name)
end
end
