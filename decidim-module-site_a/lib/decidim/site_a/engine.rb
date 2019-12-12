# frozen_string_literal: true

require "rails"
require "decidim/core"

module Decidim
  module SiteA
    # This is the engine that runs on the public interface of site_a.
    class Engine < ::Rails::Engine
      isolate_namespace Decidim::SiteA

      routes do
        # Add engine routes here
        # resources :site_a
        # root to: "site_a#index"
      end

      initializer "decidim_site_a.assets" do |app|
        app.config.assets.precompile += %w[decidim_site_a_manifest.js decidim_site_a_manifest.scss]
      end
    end
  end
end
