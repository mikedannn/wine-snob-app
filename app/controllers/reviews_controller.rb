class ReviewsController < ApplicationController
    # skip_before_action :authorize, only: :update

    def index
        render json: Review.all, status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:rating, :content, :user_id, :wine_id)
    end

end
