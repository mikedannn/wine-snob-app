class Review < ApplicationRecord

  validates :rating, :content, presence: true
  # validates :rating, presence: true, :inclusion => { :in => 0..100 }
  # validates :content, presence: true

  belongs_to :user
  belongs_to :wine

end