class Rating < ActiveRecord::Base
  belongs_to :product
  belongs_to :comment
  has_many :comments, class_name: 'Rating'
end
