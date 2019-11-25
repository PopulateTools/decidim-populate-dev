# frozen_string_literal: true

source "https://rubygems.org"

DECIDIM_VERSION = "0.19.0"

ruby RUBY_VERSION

gem "decidim", DECIDIM_VERSION
gem "decidim-consultations", DECIDIM_VERSION
# gem "decidim-initiatives", DECIDIM_VERSION
gem "bootsnap", "~> 1.3"
gem "puma", "~> 3.12"
gem "uglifier", "~> 4.1"
gem "faker", "~> 1.9"
gem "letter_opener_web", "~> 1.3"
gem "rollbar"
gem "sidekiq", "~> 5.2"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri
  gem "decidim-dev", DECIDIM_VERSION
end

group :development do
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 3.5"
end
