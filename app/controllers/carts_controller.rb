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
    cart = Cart.find(params[:cart_id])
    product = Product.find(params[:product_id])
    quant = params[:quantity]

    if quant > 0 && quant <= product.inventory
      deleted_count = cart.products.destroy(product.id).count
      product.inventory += deleted_count
      cart.products.push([product]*quant).flatten
      product.inventory -= quant
      cart.save
      product.save
      render json: cart.products
    else
      render nothing: true, status: 402;
    end
  end
end
