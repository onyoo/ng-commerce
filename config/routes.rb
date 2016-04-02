Rails.application.routes.draw do
  root to: 'application#angular'

  resources :products, only: [:index]
  resources :categories, only: [:index, :show]
end
