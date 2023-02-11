class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  
  belongs_to :user, serializer: ReviewUserSerializer
  belongs_to :wine, serializer: ReviewWineSerializer
end
