class Post < ApplicationRecord
  validates :title, :content, :image ,presence:true

  mount_uploader :image, ImageUploader
end
