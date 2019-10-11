# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true}

  after_initialize :ensure_session_token

  attr_accessor :password

  has_many :initiated_friendships,
  class_name: 'Friendship',
  foreign_key: :inviter_id

  has_many :accepted_friendships,
  class_name: 'Friendship',
  foreign_key: :invitee_id

  has_many :invitees,
  through: :initiated_friendships,
  source:  :invitee

  has_many :inviters,
  through: :accepted_friendships,
  source:  :inviter

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

  def friends
    # debugger
    self.inviters.concat(self.invitees)
  end
end
