class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      session[:user_name] = user.name
      render json: user
    else
      render status: 400
    end
  end

  def destroy
    session.clear
    render nothing: true
  end

end
