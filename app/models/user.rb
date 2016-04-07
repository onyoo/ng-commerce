class User < ActiveRecord::Base
  has_secure_password

  validates :name, :email, :password_digest, presence: true

  has_many :orders
  has_many :carts
  has_many :products, through: :carts
end
