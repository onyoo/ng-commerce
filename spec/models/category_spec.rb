require 'rails_helper'

RSpec.describe Category, type: :model do
  before do
      @product = Product.create(name: 'la Sportiva Skwama', price: 200, inventory: 50)
      @category = Category.create(name:'Climbing Gear')
    end

    it 'has many products through category_items' do
      2.times do
        @category.products << @product
      end
      expect(@category.products.length).to eq(2)
    end
  end
