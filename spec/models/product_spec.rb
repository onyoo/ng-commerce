require 'rails_helper'

RSpec.describe Product, type: :model do
  before do
    user = User.create(name: 'Test', email: 'testy@cambridge.ac.uk', password: 'whatpassword')
    @rabbit = Product.create(name: 'machanical rabbit', price: 1000, inventory: 49)
    @dog_toys_cat = Category.create(name:'Dog Toys')
    @rating = Rating.create(product_id: @rabbit.id, rating_id: nil, user_id: user.id, body: 'my dog loved chasing this rabbit all day', score: 10)
  end

  it 'has many categories' do
    @rabbit.categories << @dog_toys_cat
    expect(@rabbit.categories.length).to eq(1)
  end

  it 'has many ratings' do
    @rabbit.ratings << @rating
    expect(@rabbit.ratings.length).to eq(1)
  end
end
