class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      # If password & password_confirmation match(or if password_confirmation is nil), the user is saved and the hashed version of the password is stored in the password_digest column of the database
      t.string :password_digest

      t.timestamps
    end
  end
end
