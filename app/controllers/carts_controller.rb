class CartsController < ApplicationController

  def show
    if (Integer(params[:id]) rescue false)
      render json: Cart.find(params[:id]).products
    else
      user = User.find_by(name: params[:id])
      render json: Cart.where(user_id: user.id)
    end
  end

  def update
    cart_products = User.find_by(name: params[:id]).carts.last.products
    product = Product.find(params[:product_id])
    if !cart_products.include? product
      cart_products << product
      product.inventory -= 1
    else
      cart_product = cart_products.find(product.id)
      cart_product.quantity += 1
      product.inventory -= 1
      cart_product.save
    end
    product.save
    render nothing: true, status: 202
  end

end
