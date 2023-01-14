

6.times do 
    User.create(
        name: Faker::Name.name_with_middle,
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
        birth_date: Faker::Date.birthday(min_age: 18),
        email: Faker::Internet.free_email
    )
end

20.times do 
    Wine.create(
        varietal: Faker::FunnyName.two_word_name,
        color: Faker::Color.color_name,
        winery: Faker::Company.name,
        year: Faker::Number.number(digits: 4),
        image_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['wine'])
    )
end

users = [1, 2, 3, 4, 5, 6]
wines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

10.times do 
    Review.create(
        user_id: users.sample,
        wine_id: wines.sample,
        rating: 4,
        content: Faker::Movies::Departed.quote
    )
end

p "Done seeding"