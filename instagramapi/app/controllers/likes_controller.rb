class LikesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalidrecord
    # method to see all likes
    # method to add likes
    def index 
        likes = Like.all 
        render json: likes
    end

    def create 
        likes = Like.create!(like_params)
        render json: likes
    end

    private
    def like_params
        params.permit(:post_id, :user_id)
    end

    def invalidrecord(resp)
        render json: {errors: resp.record.errors}
    end
end
