Rails.application.routes.draw do

  get "/wines/all", to: "wines#all_wines"
  post "/account/wines/new", to: "wines#create"

  resources :wines, only: [:index, :show]
  resources :reviews, only: [:index, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/wines/:id/reviews", to: "wines#reviews"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
