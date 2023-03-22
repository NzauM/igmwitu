Rails.application.routes.draw do
  resources :posttags
  resources :tags
  # devise_for :users
  # resources :users
  resources :likes, only: [:index, :create]
  resources :posts 
  # resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/welcome/addpost', to: "welcome#addpost"
  get '/welcome/', to: "welcome#heythere"
end
