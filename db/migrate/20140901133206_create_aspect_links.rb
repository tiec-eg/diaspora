class CreateAspectLinks < ActiveRecord::Migration
  def change
    create_table :aspect_links do |t|

      t.timestamps
    end
  end
end
