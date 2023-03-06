class WinesController < ApplicationController

    def index
        wines = @current_user.wines
        render json: wines
    end

    def all_wines
        wines = Wine.all
        render json: wines
    end

    def show
        wine = Wine.find_by(id: params[:id])
        render json: wine, status: :ok
    end

    def create
        wine = Wine.create!(wine_params)
        render json: wine, status: :created
    end

    def reviews
        reviews = Wine.find_by(id: params[:id]).reviews
        render json: reviews, status: :ok
    end

    # def search
    #     byebug
    #     wines = Wine.includes(:reviews).where(reviews: {})
    # end

    private


    def wine_params
        params.permit(:varietal, :color, :winery, :year, :image_url)
    end

end


# Create a custom route that takes a parameter of a single word. 
# That route should take us to an action where we look through reviews 
# to see if any of the reviews have that word in the content (doesn’t have to be a full match, 
# case-insensitive). The action will render json of all the wines that are associated with that 
# review. If there is no match render json that says so.


