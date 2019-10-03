class ApplicationController < ActionController::Base

  # helper_method :current_user, :ensure_logged_in  # do we need this for front-end views?
  
    def login!(user)
      session[:session_token] = user.reset_session_token!
    end
  
    def current_user
      @current_user = find_by_session_token(session[:session_token])
    end
    
    def ensure_logged_in
      redirect_to new_session_url
    end
    
    def logged_in?
      !!current_user
    end
    
    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end
end
