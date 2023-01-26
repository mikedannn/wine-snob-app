class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  
  has_one :user, serializer: ReviewUserSerializer
  has_one :wine, serializer: ReviewWineSerializer
end
