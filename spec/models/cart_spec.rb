require 'rails_helper'

RSpec.describe Cart, type: :model do
  describe 'self.update_cart' do
    before(:each) do
      user = User.create(name: 'Roberto', email: 'emailme@hey.com', password: 'password')
      @cart = Cart.create(user_id: user.id)
      @crash_pad = Product.create(name: 'crash pad', price: 300, inventory: 49)
    end

    it 'can update the number of items in the cart' do
      @cart.products << @crash_pad
      Cart.update_cart(@cart, @crash_pad, 5)
      expect(@cart.products.where(name: 'crash pad').count).to eq(5)
    end

    it 'can update quantity without affecting other products' do
      @cart.products << @crash_pad
      product_2 = @cart.products.create(name: 'dog treats', price: 5, inventory: 50)
      Cart.update_cart(@cart, @crash_pad, 5)
      expect(@cart.products.count).to eq(6)
    end

    it 'should place new item in cart' do
      Cart.update_cart(@cart, @crash_pad, 1)
      expect(@cart.products.count).to eq(1)
    end

    it 'updates product inventory with quantity change' do
      Cart.update_cart(@cart, @crash_pad, 9)
      expect(@crash_pad.inventory).to eq(40)
    end

    it 'updates product inventory correctly when product already exists in cart' do
      Cart.update_cart(@cart, @crash_pad, 9)
      Cart.update_cart(@cart, @crash_pad, 4)
      expect(@crash_pad.inventory).to eq(45)
    end

  end
end
