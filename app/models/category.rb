class Category < ActiveRecord::Base
	acts_as_nested_set

	resourcify

  has_paper_trail

	belongs_to :user
end
