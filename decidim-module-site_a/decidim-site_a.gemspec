# frozen_string_literal: true

$LOAD_PATH.push File.expand_path("lib", __dir__)

require "decidim/site_a/version"

Gem::Specification.new do |s|
  s.version = Decidim::SiteA.version
  s.authors = ["Alberto Miedes"]
  s.email = ["albertomg994@gmail.com"]
  s.license = "AGPL-3.0"
  s.homepage = "https://github.com/decidim/decidim-module-site_a"
  s.required_ruby_version = ">= 2.5"

  s.name = "decidim-site_a"
  s.summary = "A decidim site_a module"
  s.description = "Decidim engine for site A."

  s.files = Dir["{app,config,lib}/**/*", "LICENSE-AGPLv3.txt", "Rakefile", "README.md"]

  s.add_dependency "decidim-core", Decidim::SiteA.version
end
