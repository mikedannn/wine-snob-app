class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  # , :password_digest, :birth_date, :email
end
