Rails.application.routes.draw do
  root to: 'application#angular'

  resources :products, only: [:index, :show, :update, :create, :destroy]
  resources :categories, only: [:index, :show]
  resources :ratings, only: [:show]
  resources :carts, only: [:create, :show, :update, :destroy]
  resources :users, only: [:show]


  # post '/products/:id/delete' => 'products#destroy', as: 'delete_product'
  post '/login', to: 'sessions#create', as: 'login'
  delete '/logout', to: 'sessions#destroy', as: 'logout'

  patch '/checkout/:id', to: 'carts#checkout', as: 'checkout'
end
