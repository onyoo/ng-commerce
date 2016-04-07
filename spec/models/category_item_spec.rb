# require 'rails_helper'
#
# RSpec.describe CategoryItem, type: :model do
#   before do
#     @product = Product.create(name: 'la Sportiva Skwama', price: 200, inventory: 50)
#     @category = Category.create(name:'Climbing Gear')
#   end
#
#   it 'creates a valid relationship between product and category' do
#     cat_item = CategoryItem.create(category_id: @category.id, product_id: @product.id)
#     expect(cat_item).to be_a CategoryItem
#   end
# end
