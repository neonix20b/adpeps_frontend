class AddImgToNews < ActiveRecord::Migration
  def change
  	add_column :news, :img_url, :string
  end
end
