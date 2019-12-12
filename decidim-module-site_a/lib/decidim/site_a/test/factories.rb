# frozen_string_literal: true

require "decidim/core/test/factories"

FactoryBot.define do
  factory :site_a_component, parent: :component do
    name { Decidim::Components::Namer.new(participatory_space.organization.available_locales, :site_a).i18n_name }
    manifest_name :site_a
    participatory_space { create(:participatory_process, :with_steps) }
  end

  # Add engine factories here
end
