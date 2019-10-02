class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, presence: true
      t.string :email, presence: true, index: { unique: true }
      t.string :password_digest, presence: true
      t.string :session_token, presence: true, index: { unique: true }
      
      t.timestamps
    end
  end
end
