class Cart < ActiveRecord::Base
  belongs_to :user
  has_many :line_items
  has_many :products, through: :line_items

  def self.update_cart(cart,product,quant)
    if product.in?(cart.products)
      deleted_count = cart.products.count
      cart.products.destroy(product.id)
      product.inventory += deleted_count
    end
    cart.products.push([product]*quant).flatten
    product.inventory -= quant
    cart.save
    product.save
  end

end
