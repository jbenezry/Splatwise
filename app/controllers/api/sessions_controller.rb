class Api::SessionsController < ApplicationController

    def new
      render :new
    end

    def create
      user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if user
        log_in!(user)
        render :json
      else
        flash.now[:errors] = @user.errors.full_messages
        # render :new 
      end
    end

    def destroy
      logout
      render :json
    end

end