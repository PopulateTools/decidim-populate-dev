# frozen_string_literal: true
# This migration comes from decidim (originally 20220119151540)

class AddAllowPushNotificationsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :decidim_users, :allow_push_notifications, :boolean, default: false
  end
end
