# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(name: 'Test', email: 'tim@cambridge.ac.uk', password: 'greyhound')

dog_toy = Product.create(name: 'machanical rabbit', price: 1000, inventory: 50)
dog_bone = Product.create(name: 'dog bone', price: 10, inventory: 50)
tennis_balls = Product.create(name: 'tennis balls', price: 1, inventory: 50)
dog_treats = Product.create(name: 'dog treats', price: 5, inventory: 50)

crash_pad = Product.create(name: 'crash pad', price: 300, inventory: 50)
la_sortiva = Product.create(name: 'la Sportiva Skwama', price: 200, inventory: 50)

dog_toys_cat = Category.create(name:'Dog Toys')
climbing_cat = Category.create(name:'Climbing Gear')

category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_toy.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_bone.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: tennis_balls.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_treats.id)

category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: crash_pad.id)
category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: la_sortiva.id)

cart = Cart.create(user_id: user.id)

line_item = LineItem.create(product_id: dog_toy.id, cart_id: cart.id)
line_item = LineItem.create(product_id: tennis_balls.id, cart_id: cart.id)
line_item = LineItem.create(product_id: crash_pad.id, cart_id: cart.id)

order = Order.create(user_id: user.id, cart_id: cart.id)

rating = Rating.create(product_id: dog_toy.id, rating_id: nil, user_id: user.id, body: 'my dog loved chasing this rabbit all day', score: 10)
