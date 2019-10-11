# conditional logic =>
#   if current_user.id == inviter_id
#     return invitee_id
#   else
#     return inviter_id
#   end

json.extract! @friendship, :invitee_id
