6.times do 
    User.create(
        name: Faker::Name.name_with_middle,
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
        birth_date: Faker::Date.birthday(min_age: 18),
        email: Faker::Internet.free_email
    )
end

p "Done seeding"