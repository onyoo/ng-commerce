class Cart < ActiveRecord::Base
  belongs_to :user
  validates_associated :user

  has_many :line_items
  has_many :products, through: :line_items

  def self.update_cart(cart,product,quant)
    if product.in?(cart.products)
      deleted_count = cart.products.where(id: product.id).count
      cart.products.destroy(product.id)
      product.inventory += deleted_count
    end
    cart.products.push([product]*quant).flatten
    product.inventory -= quant
    cart.save
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
