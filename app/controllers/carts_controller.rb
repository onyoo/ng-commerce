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
    if params[:quantity] && ((product.inventory - params[:quantity]) > 0 )
      params[:quantity].times do
        cart_products << product
      end
      product.inventory -= params[:quantity]
    else
      cart_products << product
      product.inventory -= 1
    end
    product.save
    render nothing: true, status: 202
  end
end
