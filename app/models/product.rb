class Product < ActiveRecord::Base
  belongs_to :supplier
  has_many :category_items
  has_many :categories, through: :category_items
end
