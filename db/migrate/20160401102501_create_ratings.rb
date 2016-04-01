class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.references :product, index: true, foreign_key: true
      t.references :rating, index: true, foreign_key: true
      t.string :body
      t.integer :ranking

      t.timestamps null: false
    end
  end
end
