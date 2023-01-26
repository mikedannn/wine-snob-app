class UserWinesSerializer < ActiveModel::Serializer
    attributes :id, :varietal, :winery, :year, :image_url
end