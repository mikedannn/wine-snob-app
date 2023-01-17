Rails.application.routes.draw do

  resources :reviews
  resources :wines
  # resources :users, only: [:show, :create]
  # resources :wines, only: [:show, :create]




  post "/signup", to: "users#create"
  get "/current-user", to: "users#get_current_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
