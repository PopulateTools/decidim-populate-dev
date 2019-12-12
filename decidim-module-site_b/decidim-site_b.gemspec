# frozen_string_literal: true

$LOAD_PATH.push File.expand_path("lib", __dir__)

require "decidim/site_b/version"

Gem::Specification.new do |s|
  s.version = Decidim::SiteB.version
  s.authors = ["Alberto Miedes"]
  s.email = ["albertomg994@gmail.com"]
  s.license = "AGPL-3.0"
  s.homepage = "https://github.com/decidim/decidim-module-site_b"
  s.required_ruby_version = ">= 2.5"

  s.name = "decidim-site_b"
  s.summary = "A decidim site_b module"
  s.description = "Decidim Engine for Site B."

  s.files = Dir["{app,config,lib}/**/*", "LICENSE-AGPLv3.txt", "Rakefile", "README.md"]

  s.add_dependency "decidim-core", Decidim::SiteB.version
end
