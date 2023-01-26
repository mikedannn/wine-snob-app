class UserReviewsSerializer < ActiveModel::Serializer
    attributes :id, :rating, :content, :wine_id
end