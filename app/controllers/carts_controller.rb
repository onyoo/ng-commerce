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
    cart_products << product
    product.inventory -= 1
    product.save
    render nothing: true, status: 202
  end

end
