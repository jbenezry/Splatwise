class Api::SessionsController < ApplicationController

    def new
      render :new
    end

    def create
      # debugger
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        # debugger
        login!(@user)
        # debugger
        render 'api/users/show'
      else
        # debugger
        render json: ['invalid credentials'], status: 422
        # we want to render errors in an array 
      end
    end

    def destroy
      logout
 
    end

end