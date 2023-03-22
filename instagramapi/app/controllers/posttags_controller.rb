class PosttagsController < ApplicationController
    def index 
        render json: Posttag.all
    end
    def create 
        mytag = Posttag.create!(params.permit(:post_id, :tag_id))
        render json: mytag
    end
end
