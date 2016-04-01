# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(name: 'Test', email: 'tim@cambridge.ac.uk', password: 'greyhound')

supplier_1 = Supplier.create(name: 'RabbitsRUs', email: 'robots@makegoodrabits.com', address: '10 Downing St.', phone: 00000000000)

dog_toy = Product.create(name: 'machanical rabbit', price: 1000, inventory: 50, cost: 400, supplier_id: supplier_1.id)

dog_toys_cat = Category.create(name:'Dog Toys')

category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_toy.id)

cart = Cart.create(user_id: user.id)

line_item = LineItem.create(product_id: dog_toy.id, cart_id: cart.id)

order = Order.create(user_id: user.id, cart_id: cart.id)

rating = Rating.create(product_id: dog_toy.id, rating_id: nil, user_id: user.id, body: 'my dog loved chasing this rabbit all day', score: 10)
