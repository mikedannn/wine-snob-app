class Wine < ApplicationRecord

    validates :varietal, presence: true
    validates :color, presence: true
    validates :winery, presence: true
    validates :year, presence: true
    validates :image_url, presence: true


    has_many :reviews, dependent: :destroy
    # has_many :reviews, allow_nil: true
    has_many :users, through: :reviews 

end
