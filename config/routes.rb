Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(show create destroy) do 
      resources :bookshelves, only: :index
    end
    resources :shelf_memberships, only: %i(create destroy)
    resources :bookshelves, only: %i(show create update destroy)
    resource :session, only: %i(create destroy)
    resources :books, only: %i(index show) do
      resources :reviews, only: :index
    end
    resources :reviews, only: %i(show create update destroy)
  end

  root to: 'static_pages#root'
end
