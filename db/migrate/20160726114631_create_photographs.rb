class CreatePhotographs < ActiveRecord::Migration
  def change
    create_table :photographs do |t|
      t.references :album, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
