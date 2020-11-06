# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

gem "decidim", git: 'git@github.com:decidim/decidim.git', branch: 'feature/process_groups_improvements'
gem "decidim-consultations", git: 'git@github.com:decidim/decidim.git', branch: 'feature/process_groups_improvements'
gem "decidim-initiatives", git: 'git@github.com:decidim/decidim.git', branch: 'feature/process_groups_improvements'

gem "decidim-navigation_maps", git: "git@github.com:PopulateTools/decidim-module-navigation_maps.git", branch: "participatory_process_groups_content_blocks"

gem "bootsnap", "~> 1.3"

gem "puma", ">= 4.3.5"
gem "uglifier", "~> 4.1"

gem "faker", "~> 1.9"

gem "wicked_pdf", "~> 1.4"
gem "sidekiq", "~> 5.2"
gem "letter_opener_web", "~> 1.3"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "decidim-dev", git: 'git@github.com:decidim/decidim.git', branch: 'feature/process_groups_improvements'
end

group :development do
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 3.5"
end
