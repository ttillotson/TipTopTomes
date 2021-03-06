require_relative 'seed_data/book_info'
require_relative 'seed_data/review_base'
require_relative 'seed_data/generic_book_info'
require_relative 'seed_data/shelf_seed_script'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User Seeds
user1 = User.create(username: 'LoveBooks', password: 'lovebooks', email: 'totallyrealemail@emails.com')
user2 = User.create(username: 'BookLove', password: 'mmmbooks', email: 'hardcovers@emails.com')
user3 = User.create(username: 'IAmTipTop', password: 'in_the_tulips', email: 'tables@emails.com')
user4 = User.create(username: 'Mr.Lincoln', password: 'fear_the_beard', email: 'log_cabin@emails.com')
user5 = User.create(username: 'AllAboutThemPages', password: 'ya_dig?', email: 'I_dont_like_words@emails.com')
user6 = User.create(username: 'JohnnyAppleseed', password: 'lovebooks', email: 'realestrealemail@emails.com')
user7 = User.create(username: 'readingISgreat', password: 'silentlysustained', email: 'SSR@emails.com')
user8 = User.create(username: 'readingrainbow', password: 'star_trek', email: 'Levar-Burton@emails.com')
user9 = User.create(username: 'davincicodeisdeep', password: 'cypher', email: 'dan_brown@emails.com')
user10 = User.create(username: 'TheSeussIsLoose', password: 'green_eggs', email: 'Horton@emails.com')
user11 = User.create(username: 'ilovedictionaries', password: 'merriam', email: 'webster@emails.com')
user12 = User.create(username: 'caughttherye', password: 'caulfield', email: 'allaboutthedough@emails.com')
user13 = User.create(username: 'raisinsoffury', password: 'better_than_grapes', email: 'steinbeck@emails.com')
user14 = User.create(username: 'Rincewind', password: 'wizzard', email: 'discworld@emails.com')
user15 = User.create(username: 'Vetinari', password: 'ankh_morpork', email: 'witty_remark@emails.com')
user16 = User.create(username: 'AppAcademy', password: 'majestic_corgi', email: 'appacademy@aa.io')
demo = User.create(username: 'DemoUser', password: 'password', email: 'demo_user@demos.com')
admin = User.create(username: 'admin', password: 'password', email: 'admin')


# Book Seeds
BOOKS.each do |book|
  Book.create(
    title: book[0].chomp,
    author: book[1].chomp,
    published: book[2].chomp,
    ISBN: book[3].chomp,
    img_url: IMAGE_URL_ARRAY.sample,
    description: DESCRIPTION.sample
  )
end

# Review Seeds
BOOKS.length.times do |book_idx|
  @even = book_idx.even?
  17.times do |user_count|
    review = REVIEWS.sample
    next if user_count == 16 && @even
    Review.create(
      body: review[1],
      rating: review[0],
      author_id: (user_count + 1),
      book_id: book_idx + 1
    )
  end
end

# Bookshelf Seeds
shelf_seeds
