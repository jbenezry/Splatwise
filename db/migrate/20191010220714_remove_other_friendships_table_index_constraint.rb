class RemoveOtherFriendshipsTableIndexConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :friendships, column: [:invitee_id, :inviter_id]
  end
end
