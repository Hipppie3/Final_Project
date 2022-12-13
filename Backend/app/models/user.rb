class User < ApplicationRecord
 has_secure_password
 validates :username, presence: true
 validates :username, uniqueness: true;
 validate :is_email?

 def is_email?
  if !email.match(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
  errors.add(:email, "Invalid email address")
end
end
end
