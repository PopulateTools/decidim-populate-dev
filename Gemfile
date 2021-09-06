# frozen_string_literal: true

source 'https://rubygems.org'

ruby RUBY_VERSION
REPO = 'https://github.com/PopulateTools/decidim.git'
BRANCH = 'meetings-staging'

gem 'decidim', git: REPO, branch: BRANCH
gem 'decidim-conferences', git: REPO, branch: BRANCH
gem 'decidim-consultations', git: REPO, branch: BRANCH
gem 'decidim-elections', git: REPO, branch: BRANCH
gem 'decidim-initiatives', git: REPO, branch: BRANCH
gem 'decidim-templates', git: REPO, branch: BRANCH

gem 'bootsnap', '~> 1.4'

gem 'foundation_rails_helper', git: 'https://github.com/sgruhier/foundation_rails_helper.git'
gem 'puma', '>= 5.0.0'
gem 'uglifier', '~> 4.1'

gem 'faker', '~> 2.14'

gem 'webpacker', '~> 6.0.0.rc.5'
# Forcing this version
gem 'declarative-option', '0.1.0'

gem 'letter_opener_web', '~> 1.3'
gem 'sidekiq', '~> 5.2'

group :development, :test do
  gem 'decidim-dev', git: REPO, branch: BRANCH

  gem 'byebug', '~> 11.0', platform: :mri

  # Use latest simplecov from master until next version of simplecov is
  # released (greather than 0.18.5)
  # See https://github.com/decidim/decidim/issues/6230
  gem 'simplecov', '~> 0.19.0'
end

group :development do
  gem 'listen', '~> 3.1'
  gem 'rubocop-faker'
  gem 'spring', '~> 2.0'
  gem 'spring-watcher-listen', '~> 2.0'
  gem 'web-console', '4.0.4'
end

group :development do
  # Profiling gems
  gem 'bullet'
  gem 'flamegraph'
  gem 'memory_profiler'
  gem 'rack-mini-profiler', require: false
  gem 'stackprof'
end
