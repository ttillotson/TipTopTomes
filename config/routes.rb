Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create destroy)
    resource :session, only: %i(create destroy)
    resources :books, only: %i(index show)
    resources :bookshelves, only: %i(index show create update destroy)
  end

  root to: 'staticpages#root'
end
