class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.integer :inventory
      t.integer :cost
      t.references :supplier, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
