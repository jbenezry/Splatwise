# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  inviter_id :integer          not null
#  invitee_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

validates_uniqueness_of :inviter_id, scope: [:invitee_id]
validates_uniqueness_of :invitee_id, scope: [:inviter_id]

belongs_to :inviter,
class_name: 'User',
foreign_key: :inviter_id

belongs_to :invitee,
class_name: 'User',
foreign_key: :invitee_id

end

