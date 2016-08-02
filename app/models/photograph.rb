class Photograph < ActiveRecord::Base
  belongs_to :album
  mount_uploader :img, ImageUploader

  scope :next, lambda {|id| where("id > ?",id).order("id ASC") } # this is the default ordering for AR
  scope :previous, lambda {|id| where("id < ?",id).order("id DESC") }

  def next
    Photograph.next(self.id).first
  end

  def previous
    Photograph.previous(self.id).first
  end

end
