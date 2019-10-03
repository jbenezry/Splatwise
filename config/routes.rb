Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: "json" } do
    resources :users, only: [ :create ]     # a new controller action is not needed b/c we are using components for forms, so we don't need to render new views
    resource :session, only: [ :create, :destroy ]
  end

  root to: 'static_pages#root'

end
