class Album < ActiveRecord::Base
  has_many :photographs, :dependent => :destroy
  belongs_to :user
end
