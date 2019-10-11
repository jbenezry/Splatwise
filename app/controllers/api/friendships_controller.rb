class Api::FriendshipsController < ApplicationController
  # new routes are not needed when using React components.  The React component form takes the place of the new
  def create
  # debugger # look at params coming in
  friend = User.find_by(email: params[:user][:email])
    if friend
      new_friendship = Friendship.create({ inviter_id: current_user.id, invitee_id: friend.id })
      # new_friendship.save - is this necessary?
      render 'api/friendships/show'
    else
      # debugger
      render json: ['friend not found'], status: 422
      # we want to render errors in an array
    end
  end
  
  def show
    friend = User.find_by(email: params[:user][:email])
    if friend
      render 'api/friendships/show'
    else
      # debugger
      render json: ['friend not found'], status: 422
      # we want to render errors in an array
    end
  end

end

# destroy action deprioritized for clone, hence not included in friends_controller.rb