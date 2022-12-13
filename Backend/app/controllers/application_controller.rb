class ApplicationController < ActionController::API
 include ActionController::Cookies
 # This will render out the not found/unprocessable entity message for our controllers 
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # This filter method will run before any controller action
  before_action :authorize
 
 private
  
  def authorize
    @current_user = User.find_by(id: session[:user_id])
      
    render json: { error: "This action is not authorized" }, status: :unauthorized unless @current_user
  end


  def render_not_found_response(invalid)
   render json: { error: "#{invalid.mode} not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
   render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  # Throw the error unless the session includes :user_id
  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
 end
