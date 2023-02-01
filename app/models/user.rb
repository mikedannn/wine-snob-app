class User < ApplicationRecord
    has_secure_password

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :birth_date, presence: true
    validates :email, presence: true, uniqueness: true

    has_many :reviews, dependent: :destroy
    has_many :wines, through: :reviews

end
