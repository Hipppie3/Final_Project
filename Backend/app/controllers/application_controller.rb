class ApplicationController < ActionController::API
 include ActionController::Cookies
 # This will render out the not found/unprocessable entity message for our controllers 
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # This filter method will run before any controller action
  before_action :authorize
 
 private

  def render_not_found_response(invalid)
   render json: { error: "#{invalid.mode} not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
   render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  # This will throw the error unless the session includes :user_id, so if the user isn't logged in, we return 401 unauthorized
  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
 end
