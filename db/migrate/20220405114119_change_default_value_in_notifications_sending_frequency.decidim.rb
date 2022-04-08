# frozen_string_literal: true
# This migration comes from decidim (originally 20220323195017)

class ChangeDefaultValueInNotificationsSendingFrequency < ActiveRecord::Migration[6.0]
  def change
    change_column_default :decidim_users, :notifications_sending_frequency, "none"
  end
end
