class AddLinksToAspects < ActiveRecord::Migration
  def change
  	 create_table :aspect_links do |t|
      t.integer :aspect_id
      t.text :link
      t.timestamps
    end
  end
end
