class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  protect_from_forgery with: :exception

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized


  def angular
    @product = Product.new
    @products = Product.all
    render 'layouts/application'
  end

  private

  def current_user
    User.find(session[:user_id])
  end

  def user_not_authorized
    flash[:alert]= "acces denied."
    redirect_to(root_path)
  end

end
