class SessionsController < ApplicationController
    
    #login
    def create
        @user = User.find_by_username(params[:username])
        if @user && @user.authenticate(params[:password])
            login_user
            render json: @user, status: :ok
        else
            render json: { errors: ["Username or password did not match!"]}, status: :bad_request
        end
    end

    #logout
    def destroy
        session.clear
    end


end
