class User < ActiveRecord::Base
  has_secure_password

  validates :name, :email, :password_digest, presence: true

  has_many :orders
  has_many :carts
  has_many :products, through: :carts

  enum role: [:admin, :user]
  after_initialize :set_default_role, :if => :new_record?

  def set_default_role
    self.role ||= :user
  end

end
