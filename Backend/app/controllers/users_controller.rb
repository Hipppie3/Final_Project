class UsersController < ApplicationController
 before_action :authorize
 skip_before_action :authorize, only: :create

 def create
  user = User.create!(user_params)
  if user.valid?
  sessions[:user_id] = user.id
  render json: user, status: :created
  else
   render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
  end
 end

 def show
  user = User.find_by(id: session[:user_id])
  render json: user
 end

 private 
 
 def user_params
  params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :image_url, :bio)
 end

 
end
