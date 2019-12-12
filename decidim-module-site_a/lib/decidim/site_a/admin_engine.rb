# frozen_string_literal: true

module Decidim
  module SiteA
    # This is the engine that runs on the public interface of `SiteA`.
    class AdminEngine < ::Rails::Engine
      isolate_namespace Decidim::SiteA::Admin

      paths["db/migrate"] = nil
      paths["lib/tasks"] = nil

      routes do
        # Add admin engine routes here
        # resources :site_a do
        #   collection do
        #     resources :exports, only: [:create]
        #   end
        # end
        # root to: "site_a#index"
      end

      def load_seed
        nil
      end
    end
  end
end
