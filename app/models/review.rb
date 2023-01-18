class Review < ApplicationRecord

  validates :user_id, presence: true
  validates :wine_id, presence: true
  # validates :rating, presence: true, :inclusion => { :in => 0..100 }
  # validates :content, presence: true

  belongs_to :user
  belongs_to :wine

end