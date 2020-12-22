class CreateEventattendances < ActiveRecord::Migration[6.0]
  def change
    create_table :eventattendances do |t|
      t.integar :castcount, default: -> { '0' }
      t.references :event, null: false, foreign_key: true
      t.references :character, null: false, foreign_key: true
      t.date :registerdate, default: -> { 'CURRENT_TIMESTAMP' }
      t.timestamps
    end
    add_index :eventattendances, [:character_id, :event_id], :unique => true
  end
end
