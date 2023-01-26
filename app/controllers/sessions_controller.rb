class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: {Error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
    
    # #login
    # def create
    #     @user = User.find_by_username(params[:username])
    #     if @user && @user.authenticate(params[:password])
    #         login_user
    #         render json: @user, status: :ok
    #     else
    #         render json: { errors: ["Username or password did not match!"]}, status: :bad_request
    #     end
    # end

    # #logout
    # def destroy
    #     session.clear
    # end


end
