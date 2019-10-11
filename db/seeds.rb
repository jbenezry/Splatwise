# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Friendship.destroy_all
User.destroy_all

users = User.create([
  { username: 'Whitney Wolfe Herd', email: 'whitney@bumble.com', password: 'ilovebumble' },
  { username: 'Steve Jobs', email: 'steve@apple.com', password: 'iloveapple' },
  { username: 'Sheryl Sandberg', email: 'sheryl@facebook.com', password: 'ilovefacebook' },
  { username: 'Jack Ma', email: 'jack@alibaba.com', password: 'ilovealibaba' },
  { username: 'Anne Wojcicki', email: 'anne@23andme.com', password: 'ilove23andme' },
  { username: 'Mark Zuckerberg', email: 'mark@facebook.com', password: 'ilovefacebook' }
  # { username: 'Payal Kadakia', email: 'payal@classpass.com', password: 'iloveclasspass' },
  # { username: 'Belinda Johnson', email: 'belinda@airbnb.com', password: 'iloveairbnb' },
  # { username: 'Bill Gates', email: 'bill@msn.com', password: 'ilovemicrosoft' },
  # { username: 'Meg Whitman', email: 'meg@ebay.com', password: 'iloveebay' },
  # { username: 'Jeff Bezos', email: 'jeff@amazon.com', password: 'iloveamazon' },
  # { username: 'Susan Wojcicki', email: 'susan@youtube.com', password: 'iloveyoutube' }
])

friends = Friendship.create!(inviter_id: users[0].id, invitee_id: users[3].id)
  # { inviter_id: users[0].id, invitee_id: users[3].id },
  # { inviter_id: users[0].id, invitee_id: users[5].id },
  # { inviter_id: users[1].id, invitee_id: users[3].id },
  # { inviter_id: users[3].id, invitee_id: users[5].id },
  # { inviter_id: users[5].id, invitee_id: users[7].id },
  # { inviter_id: users[7].id, invitee_id: users[10].id },
  # { inviter_id: users[1].id, invitee_id: users[9].id },
  # { inviter_id: users[9].id, invitee_id: users[8].id },
  # { inviter_id: users[4].id, invitee_id: users[8].id },
  # { inviter_id: users[11].id, invitee_id: users[3].id },
  # { inviter_id: users[11].id, invitee_id: users[10].id },
  # { inviter_id: users[4].id, invitee_id: users[10].id },
  # { inviter_id: users[7].id, invitee_id: users[1].id },
  # { inviter_id: users[6].id, invitee_id: users[8].id },
  # { inviter_id: users[6].id, invitee_id: users[3].id },
  # { inviter_id: users[2].id, invitee_id: users[3].id },
  # { inviter_id: users[5].id, invitee_id: users[9].id },
  # { inviter_id: users[1].id, invitee_id: users[10].id },
  # { inviter_id: users[2].id, invitee_id: users[7].id }
# ])

