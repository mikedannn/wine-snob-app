class ReviewWineSerializer < ActiveModel::Serializer
    attributes :varietal, :winery, :year
end