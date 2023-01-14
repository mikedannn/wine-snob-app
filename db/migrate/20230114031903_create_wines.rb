class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.string :varietal
      t.string :color
      t.string :winery
      t.integer :year
      t.string :image_url

      t.timestamps
    end
  end
end
