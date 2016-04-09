module ApplicationHelper

  def current_user_admin?
    user = User.find(session[:user_id])
    user.admin?
  end
end
