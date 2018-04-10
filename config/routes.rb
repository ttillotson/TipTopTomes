Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create destroy) do
      resources :bookshelves, only: %i(index show create update destroy)
    end
    resource :session, only: %i(create destroy)
    resources :books, only: %i(index show)
    resources :reviews, only: %i(show create update destroy)
  end

  root to: 'static_pages#root'
end
