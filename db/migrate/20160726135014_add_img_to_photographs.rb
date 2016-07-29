class AddImgToPhotographs < ActiveRecord::Migration
  def change
    add_column :photographs, :img, :string
  end
end
