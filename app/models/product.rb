class Product < ActiveRecord::Base
  has_many :category_items
  has_many :categories, through: :category_items
  has_many :ratings

  has_attached_file :product_image
  validates_attachment_content_type :product_image, content_type: /\Aimage\/.*\Z/
  # validates_attachment_file_name :avatar, matches: [/png\Z/, /jpe?g\Z/]

  def save_url
    self.image_url = self.product_image.url
    self.save
  end

  def category_ids=(arr)
    arr.each do |id|
      if id != ''
        self.categories << Category.find(id.to_i)
      end
    end
  end
end
