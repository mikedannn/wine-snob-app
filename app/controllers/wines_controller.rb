class WinesController < ApplicationController

    def index
        wines = @current_user.wines
        render json: wines
    end

    def all_wines
        wines = Wine.all
        render json: wines
    end

    ## eliminate show route
    def show
        wine = Wine.find_by(id: params[:id])
        render json: wine, status: :ok
    end

    def create
        wine = Wine.create!(wine_params)
        render json: wine, status: :created
    end

    ## not needed
    def reviews
        reviews = Wine.find_by(id: params[:id]).reviews
        render json: reviews, status: :ok
    end

    private

    def wine_params
        params.permit(:varietal, :color, :winery, :year, :image_url)
    end

end
