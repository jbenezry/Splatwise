# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { username: 'Steve Jobs', email: 'steve@apple.com', password: 'iloveapple' },
  { username: 'Bill Gates', email: 'bill@msn.com', password: 'ilovemicrosoft' },
  { username: 'Mark Zuckerberg', email: 'mark@facebook.com', password: 'ilovefacebook' },
  { username: 'Warren Buffett', email: 'warren@berkshire.com', password: 'iloveberkshire' },
  { username: 'Jeff Bezos', email: 'jeff@amazon.com', password: 'iloveamazon' },
])


