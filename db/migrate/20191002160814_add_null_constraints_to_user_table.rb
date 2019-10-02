class AddNullConstraintsToUserTable < ActiveRecord::Migration[5.2]
  change_column_null :users, :username, null: false
  change_column_null :users, :email, null: false
  change_column_null :users, :password_digest, null: false
  change_column_null :users, :session_token, null: false
end

