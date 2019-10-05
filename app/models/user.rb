class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true}

# Possible signup errors include:
# - First name can't be blank
# - Email address can't be blank
# - Please enter a valid email address.
# - Password is too short (minimum is 8 characters)
# - Password is too common (e.g. '12345', 'password', etc) - please choose something more complex or unique

  after_initialize :ensure_session_token

  attr_accessor :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(email, password)
    # debugger  
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

end

