class Api::UsersController < ApplicationController

    def new
    end

    def create
      @user = user.new
      if @user.save
        log_in!(user)
        # render :json
      else
        flash.now[:errors] = @user.errors.full_messages
        # render :new
      end
    end

    def user_params
      params.require(:user).permit(:username, :password)
    end

end