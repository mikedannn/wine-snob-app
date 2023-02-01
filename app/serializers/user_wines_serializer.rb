class UserWinesSerializer < ActiveModel::Serializer
    attributes :id, :varietal, :color, :winery, :year, :image_url
end