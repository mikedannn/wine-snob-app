class UsersController < ApplicationController


    #sign up - creating account and logging user in 
    def create
        @user = User.new(user_params)
        if @user.save
            login_user #creates new session
            render json: @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def get_current_user
        if logged_in?
            render json: current_user, status: :ok
        else 
            render json: { errors: ["There is currently no user logged in!"]}, status: :bad_request
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :birth_date, :email)
    end


end
