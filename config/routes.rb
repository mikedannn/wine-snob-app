Rails.application.routes.draw do

 
  resources :wines, except: [:delete] do 

    #
    # GET /wines                   -> SHOW
    # POST /wines                   -> CREATE
    # PUT /wines/:wine_id/reviews/:id        -> UPDATE
    # DELETE /wines/:wine_id/reviews/:id         -> SHOW
    #

    resources :reviews
    #
    # GET /wines/:wine_id/reviews         -> SHOW
    # POST /wines/:wine_id/reviews         -> CREATE
    # PUT /wines/:wine_id/reviews/:id        -> UPDATE
    # DELETE /wines/:wine_id/reviews/:id         -> SHOW
    #
  
  end

  # resources :reviews


  # resources :users, only: [:show, :create]
  # resources :wines, only: [:show, :create]




  post "/signup", to: "users#create"
  get "/current-user", to: "users#get_current_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
