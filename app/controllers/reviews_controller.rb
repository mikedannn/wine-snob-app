class ReviewsController < ApplicationController

    # def index
    #     reviews = Review.all.order(rating: :asc)
    #     render json: reviews, include: [:wine, :user]
    # end

    def index
        reviews = current_user.reviews
        render json: reviews
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end
end
