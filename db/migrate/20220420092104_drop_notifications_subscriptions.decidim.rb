# frozen_string_literal: true
# This migration comes from decidim (originally 20220418124338)

class DropNotificationsSubscriptions < ActiveRecord::Migration[6.0]
  def change
    drop_table :decidim_notifications_subscriptions
  end
end
