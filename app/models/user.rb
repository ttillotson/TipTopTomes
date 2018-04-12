# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  after_create :build_shelves

  attr_accessor :read_shelf, :reading_shelf, :will_read_shelf

  has_many :reviews,
  class_name: :Review,
  foreign_key: :author_id,
  dependent: :destroy

  has_many :shelves,
  class_name: :Bookshelf,
  foreign_key: :user_id,
  dependent: :destroy


  has_many :books,
  through: :shelves

  attr_reader :password


  def default_shelves
    self.shelves.limit(3)
  end

  def default_memberships
    shelf_memberships = self.shelves.includes(:memberships).limit(3).map do |shelf|
      shelf.memberships
    end
    shelf_memberships.flatten
  end

  def default_membership?(book_id)
    shelf_book = self.shelves
    .includes(:memberships)
    .limit(3)
    .find(book_id: book_id)
    return !!shelf_book
  end


# FRONT END AUTH

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user&.valid_password?(password) ? user : nil)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def build_shelves
    @read_shelf = Bookshelf.create!(user_id: self.id, name: "Read")
    @reading_shelf = Bookshelf.create!(user_id: self.id, name: "Want to Read")
    @will_read_shelf = Bookshelf.create!(user_id: self.id, name: "Currently Reading")
  end

end
