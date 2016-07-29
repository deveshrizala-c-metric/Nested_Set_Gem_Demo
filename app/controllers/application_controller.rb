class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #rescue_from Category::NotAutorized, with: :modal_res

    # rescue_from CanCan::AccessDenied do | exception |
    #   respond_to do |format|
    #     flash[:danger]=exception.message
    #     format.html { redirect_to home_index_path }
    #   end
    # end

end