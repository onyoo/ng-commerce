module ApplicationHelper

  def current_user_admin?
    if session[:user_id]
      user = User.find(session[:user_id])
      user.admin?
    end
  end
end
