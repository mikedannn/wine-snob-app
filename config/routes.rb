Rails.application.routes.draw do

  get "/wines/all", to: "wines#all_wines"

  resources :wines, only: [:index, :show, :create]
  resources :reviews, only: [:index, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/wines/:id/reviews", to: "wines#reviews"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
