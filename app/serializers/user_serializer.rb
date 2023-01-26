class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :wines, serializer: UserWinesSerializer
  has_many :reviews, serializer: UserReviewsSerializer
end
