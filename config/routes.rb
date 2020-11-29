Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'welcome#index'
  post '/create-quote', to: 'welcome#create_quote', as: 'create_quote'
  namespace :api do
    namespace :v1 do
      get '/quotes', to: 'quotes#index', as: 'quotes'
      post '/quotes', to: 'quotes#create', as: 'create_quote'
    end
  end
end
