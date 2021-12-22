# frozen_string_literal: true
# This migration comes from decidim_forms (originally 20210513094440)

class AddPublishedAtToDecidimQuestions < ActiveRecord::Migration[5.2]
  class Question < ApplicationRecord
    self.table_name = :decidim_forms_questions
  end

  def change
    add_column :decidim_forms_questions, :published_at, :datetime, index: true

    Question.reset_column_information

    Question.find_each do |question|
      question.published_at = Time.current
      question.save!
    end
  end
end
