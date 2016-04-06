class CartsController < ApplicationController

  def create
    render json: Cart.create(user_id: params[:user_id])
  end

  def show
    render json: Cart.find(params[:id]).products
  end

  def update
    cart = Cart.find(params[:id])
    product = Product.find(params[:product_id])
    quant = params[:quantity]

    if quant > 0 && quant <= product.inventory
      Cart.update_cart(cart,product,quant)
      render json: cart.products
    else
      render nothing: true, status: 402;
    end
  end

  def checkout
    total = 0
    cart = Cart.find(params[:id])
    cart.products.each {|i| total += i.price}
    # bill user for total, with itemized receipt
    cart.destroy
    render nothing: true, status: 200
  end

  def destroy
    render json: Cart.destroy(params[:id]).id
  end

end
