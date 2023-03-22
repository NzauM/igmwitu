class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :caption, :image_url, :total_likes, :likes, :tags

  def total_likes
    post_likes = object.likes
    post_likes.length()
  end


  def image_url
    # puts "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    # puts Cloudinary::Utils.cloudinary_url(object.image.blob.key)
    # puts "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    # cloudinary: object.image.service_url
    # self.object.get_cloudinary_info
    # Cloudinary::Utils.cloudinary_url(self.object.image)
    # service = self.object.image.service


    # file_url = service_url(self.object.image.key)
    # file_url
    Cloudinary::Utils.cloudinary_url(object.image.blob.key)
  end
end
