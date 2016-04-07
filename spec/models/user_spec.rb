require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = User.create(name: 'Test', email: 'testy@cambridge.ac.uk', password: 'whatpassword')
    @cart = Cart.create(user_id: @user.id)
  end

  it 'has many carts' do
    cart_2 = Cart.create(user_id: @user.id)
    expect(@user.carts.length).to eq(2)
  end

  it 'has many products trough carts' do
    dog_toy = Product.create(name: 'machanical rabbit', price: 1000, inventory: 49)

    2.times do
      @user.carts[0].products << dog_toy
    end

    expect(@user.products.length).to eq(2)
  end

  it 'has many orders' do
    2.times do
      Order.create(user_id: @user.id, cart_id: @cart.id)
    end
    expect(@user.orders.length).to eq(2)
  end

end
