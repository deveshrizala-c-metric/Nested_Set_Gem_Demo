class Photograph < ActiveRecord::Base
  belongs_to :album
  mount_uploader :img, ImageUploader
end
