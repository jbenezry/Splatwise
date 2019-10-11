class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_index :friendships, column: [:inviter_id, :invitee_id]
  end
end
