class ApplicationController < ActionController::Base

  before_action :prepend_organization_views

  private

  def prepend_organization_views
    case request.host
    when "decidim-a.test"
      prepend_view_path "decidim-module-site_a/app/custom_views"
    when "decidim-b.test"
      prepend_view_path "decidim-module-site_b/app/custom_views"
    end
  end

end
