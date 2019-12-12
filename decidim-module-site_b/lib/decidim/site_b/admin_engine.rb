# frozen_string_literal: true

module Decidim
  module SiteB
    # This is the engine that runs on the public interface of `SiteB`.
    class AdminEngine < ::Rails::Engine
      isolate_namespace Decidim::SiteB::Admin

      paths["db/migrate"] = nil
      paths["lib/tasks"] = nil

      routes do
        # Add admin engine routes here
        # resources :site_b do
        #   collection do
        #     resources :exports, only: [:create]
        #   end
        # end
        # root to: "site_b#index"
      end

      def load_seed
        nil
      end
    end
  end
end
