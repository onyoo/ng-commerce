class Cart < ActiveRecord::Base
  belongs_to :user
  validates_associated :user

  has_many :line_items
  has_many :products, through: :line_items

  def update_cart(product,quant)
    if product.in?(self.products)
      deleted_count = self.products.where(id: product.id).count
      self.products.destroy(product.id)
      product.inventory += deleted_count
    end
    self.products.push([product]*quant).flatten
    product.inventory -= quant
    self.save
    product.save
  end

  def replenish_products
    self.products.uniq.each do |product|
      deleted_count = self.products.where(id: product.id).count
      self.products.destroy(product.id)
      product.inventory += deleted_count
      product.save
    end
    self.save
  end

end
