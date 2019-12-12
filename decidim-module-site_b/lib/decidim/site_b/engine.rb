# frozen_string_literal: true

require "rails"
require "decidim/core"

module Decidim
  module SiteB
    # This is the engine that runs on the public interface of site_b.
    class Engine < ::Rails::Engine
      isolate_namespace Decidim::SiteB

      routes do
        # Add engine routes here
        # resources :site_b
        # root to: "site_b#index"
      end

      initializer "decidim_site_b.assets" do |app|
        app.config.assets.precompile += %w[decidim_site_b_manifest.js decidim_site_b_manifest.css]
      end
    end
  end
end
