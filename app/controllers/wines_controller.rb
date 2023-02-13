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
        wine = @current_user.wines.create!(new_wine_params)
        render json: wine, status: :created
    end

    def reviews
        reviews = Wine.find_by(id: params[:id]).reviews
        render json: reviews, status: :ok
    end

    private

    def wine_params
        params.permit(:varietal, :color, :winery, :year, :image_url)
    end

    def new_wine_params
        params.require(:wine).permit(:varietal, :color, :winery, :year, :image_url)
    end

end
