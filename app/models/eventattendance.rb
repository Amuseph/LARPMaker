class Eventattendance < ApplicationRecord
  belongs_to :event
  belongs_to :user
  belongs_to :character, optional: true

  validates :user, presence: true
  validates :event, presence: true
  validates :registrationtype, presence: true

  after_update :check_registration

  def check_registration
    if (saved_change_to_registrationtype?)
      if (self.registrationtype != 'Player')
        self.character_id = nil
        self.save!
      end
    end
  end

end
