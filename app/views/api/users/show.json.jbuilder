json.extract! @user, :id, :username

json.friend_ids @user.friends.map(&:id)

# json.partial! 'api/users/user', user: @user
