class Photograph < ActiveRecord::Base
  belongs_to :album
  mount_uploader :img, ImageUploader
  acts_as_commontable
end
