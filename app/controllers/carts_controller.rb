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
    user = User.find_by(name: params[:id])
    product = Product.find(params[:product_id])
    if user.carts.last.products << product
      product.inventory -= 1
      product.save
    end
    render nothing: true, status: 202
  end

end
