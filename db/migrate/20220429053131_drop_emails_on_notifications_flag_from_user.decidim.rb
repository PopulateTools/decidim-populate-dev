# frozen_string_literal: true
# This migration comes from decidim (originally 20220427142214)

class DropEmailsOnNotificationsFlagFromUser < ActiveRecord::Migration[5.1]
  def change
    Decidim::User.where(email_on_notification: true).each { |user| user.update(notifications_sending_frequency: "real_time") }
    remove_column :decidim_users, :email_on_notification
  end
end
