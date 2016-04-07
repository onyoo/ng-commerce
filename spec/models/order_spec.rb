require 'rails_helper'

RSpec.describe Order, type: :model do
  before do
    @user = User.create(name: 'Test', email: 'testy@cambridge.ac.uk', password: 'whatpassword')
    @cart = cart = Cart.create(user_id: @user.id)
  end

  it 'should create valid orders' do
    order = Order.create(user_id: @user.id, cart_id: @cart.id)
    expect(order).to be_a Order
  end
end
