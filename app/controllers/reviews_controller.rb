class ReviewsController < ApplicationController

    # def all_wines
    #     reviews = Review.all.order(rating: :asc)
    #     render json: reviews, include: [:wine, :user]
    # end

    def index
        reviews = current_user.reviews
        render json: reviews
    end

    def create
        review = current_user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        review = current_user.reviews.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: { error: "Not Found" }, status: :unauthorized 
        end
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def review_params
        params.permit(:rating, :content)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
