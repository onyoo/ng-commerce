Rails.application.routes.draw do
  root to: 'application#angular'

  resources :products, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :ratings, only: [:show]
  resources :carts, only: [:show, :update]

  post '/login', to: 'sessions#create', as: 'login'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
