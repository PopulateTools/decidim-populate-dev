# frozen_string_literal: true

namespace :decidim_greenpeace do
  desc "Imports users from a CSV"
  task :import_users, [:csv_path] => [:environment] do |_t, args|
    raise "Please, provide a file path" if args[:csv_path].blank?

    organization = Decidim::Organization.first

    puts "Importing users, please wait..."
    importer = UsersImporter.new(args[:csv_path], organization)
    importer.import_users
    puts "Import completed."
  end

  desc "Disable users from a CSV"
  task :disable_users, [:csv_path] => [:environment] do |_t, args|
    raise "Please, provide a file path" if args[:csv_path].blank?

    organization = Decidim::Organization.first

    puts "Disabling users, please wait..."
    importer = UsersDisabler.new(args[:csv_path], organization)
    importer.disable_users
    puts "Users disabled."
  end
end
