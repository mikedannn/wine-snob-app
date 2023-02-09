class Review < ApplicationRecord

  validates :rating, numericality: { only_integer: true }, presence: true
  validates :content, length: { maximum: 250 }, presence: true

  belongs_to :user
  belongs_to :wine

  # inverse_of: :reviews, optional: true

end