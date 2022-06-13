# frozen_string_literal: true

source 'https://rubygems.org'

ruby RUBY_VERSION
REPO = 'https://github.com/PopulateTools/decidim.git'
BRANCH = 'pwa-staging'

gem 'decidim', git: REPO, branch: BRANCH
gem 'decidim-conferences', git: REPO, branch: BRANCH
gem 'decidim-consultations', git: REPO, branch: BRANCH
gem 'decidim-elections', git: REPO, branch: BRANCH
gem 'decidim-initiatives', git: REPO, branch: BRANCH
gem 'decidim-templates', git: REPO, branch: BRANCH

gem 'bootsnap', '~> 1.4'

gem "puma", '>= 5.5.1'

gem 'faker', '~> 2.14'

gem 'sidekiq'

gem 'letter_opener_web', '~> 2'

group :development, :test do
  gem 'decidim-dev', git: REPO, branch: BRANCH

  gem 'byebug', '~> 11.0', platform: :mri

  # Use latest simplecov from master until next version of simplecov is
  # released (greather than 0.18.5)
  # See https://github.com/decidim/decidim/issues/6230
end

group :development do
  gem 'listen', '~> 3.1'
  gem 'spring', '~> 2.0'
  gem 'spring-watcher-listen', '~> 2.0'
  gem 'web-console', '4.0.4'
end
