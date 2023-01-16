class WinesController < ApplicationController
    before_action :authorize


    def index
        wines = current_user.wines
        render json: wines
    end

    def create
        wine = current_user.wines.create(wine_params)
        if wine.valid?
            render json: wine, status: :created
        else
            render json: { errors: wine.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        wine = current_user.wines.find_by(id: params[:id])
        if wine
            render json: wine
        else
            render json: { error: "Not Found" }, status: :unauthorized 
        end
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def wine_params
        params.permit(:varietal, :color, :winery, :year, :image_url)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
