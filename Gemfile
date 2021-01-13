# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

gem "decidim", git: 'https://github.com/decidim/decidim.git', branch: 'develop'
gem "decidim-consultations", git: 'https://github.com/decidim/decidim.git', branch: 'develop'
gem "decidim-initiatives", git: 'https://github.com/decidim/decidim.git', branch: 'develop'

gem "decidim-navigation_maps", git: "https://github.com/PopulateTools/decidim-module-navigation_maps.git", branch: "participatory_process_groups_content_blocks"

gem "bootsnap", "~> 1.3"

gem "puma", ">= 4.3.5"
gem "uglifier", "~> 4.1"

gem "faker", "~> 2.14"

gem "wicked_pdf", "~> 1.4"
gem "sidekiq", "~> 5.2"
gem "letter_opener_web", "~> 1.3"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "decidim-dev", git: 'https://github.com/decidim/decidim.git', branch: 'develop'
end

group :development do
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 3.5"
end
