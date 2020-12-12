class CreateRaces < ActiveRecord::Migration[6.0]
  def change
    create_table :races do |t|
      t.string :name
      t.boolean :playeravailable
      t.timestamps
    end
  end
end