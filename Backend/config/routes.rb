Rails.application.routes.draw do
post "/signup", to: "users#create"
delete "/logout", to: "sessions#destroy"
post "/login", to: "sessions#create"
get "/me", to: "users#show"
end
