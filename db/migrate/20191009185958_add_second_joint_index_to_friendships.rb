class AddSecondJointIndexToFriendships < ActiveRecord::Migration[5.2]
  def change
    add_index :friendships, [:invitee_id, :inviter_id ], unique: true
  end
end
