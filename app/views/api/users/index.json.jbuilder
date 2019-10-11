@users.each do |user|
  json.set! user.id do
    # json.partial! 'api/users/user', user: user
    json.extract! user, :id, :username

    # json.friend_ids user.friends.map(&:id)
  end
end

