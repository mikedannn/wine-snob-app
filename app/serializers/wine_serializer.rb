class WineSerializer < ActiveModel::Serializer
  attributes :id, :varietal, :color, :winery, :year, :image_url

  has_many :reviews
end
