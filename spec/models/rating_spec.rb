require 'rails_helper'

RSpec.describe Rating, type: :model do
  before do
    @user = User.create(name: 'Test', email: 'testy@cambridge.ac.uk', password: 'whatpassword')
    @rabbit = Product.create(name: 'machanical rabbit', price: 1000, inventory: 49)
    @rating = Rating.create(product_id: @rabbit.id, rating_id: nil, user_id: @user.id, body: 'my dog loved chasing this rabbit all day', score: 10)
  end

  it 'belongs to a product' do
    @rabbit.ratings << @rating
    expect(@rabbit.ratings.length).to eq(1)
  end

  it 'has many comments' do
    comment = Rating.create(product_id: @rabbit.id, rating_id: @rating.id, user_id: @user.id, body: "I bought this product because of this review. It's true.")

    expect(@rabbit.ratings.length).to eq(2)
    expect(@rating.comments.length).to eq(1)
  end

end
