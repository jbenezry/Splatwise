class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :inviter_id, null: false
      t.integer :invitee_id, null: false
      t.timestamps
    end

    add_index :friendships, [:inviter_id, :invitee_id ], unique: true
  end
end
