class Api::FriendsController < ApplicationController
   # new routes are not needed when using React components.  The React component form takes the place of the new
   def create
     debugger # look at params coming in
     friend = User.find_by(email: params[:user][:email])
     if friend
       friend_association_1 = Friend.create({user_id: friend.id, friend_id: current_user.id})
       friend_association_2 = Friend.create({user_id: current_user.id, friend_id: friend.id})
       friend_association_1.save
       friend_association_2.save
       render 'api/users/show'
     else
       # debugger
       render json: ['friend not found'], status: 422
       # we want to render errors in an array
     end
   end
   # def destroy
   #
   # end
end