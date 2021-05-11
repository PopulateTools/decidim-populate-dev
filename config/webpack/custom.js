/* eslint-disable */

const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("quill"),
        loader: "expose-loader",
        options: {
          exposes: ["Quill"]
        }
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"]
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!tributejs)/,
        loader: "babel-loader"
      },
      {
        test: /\.(graphql|gql)$/,
        loader: "graphql-tag/loader"
      },
      {
        test: require.resolve("react"),
        loader: "expose-loader",
        options: {
          exposes: ["React"]
        }
      },
      {
        test: require.resolve("@rails/ujs"),
        loader: "expose-loader",
        options: {
          exposes: ["Rails"]
        }
      },
      {
        test: [
          /\.md$/,
          /\.odt$/,
        ],
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/],
        type: 'asset/resource',
        generator: {
          filename: 'media/documents/[hash][ext][query]'
        }
      },
      // Overwrite webpacker files rule to amend the filename output
      // and include the name of the file, otherwise some SVGs
      // are not generated because the hash is the same between them
      {
        test: [
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.tiff$/,
          /\.ico$/,
          /\.avif$/,
          /\.webp$/,
          /\.eot$/,
          /\.otf$/,
          /\.ttf$/,
          /\.woff$/,
          /\.woff2$/,
          /\.svg$/
        ],
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/],
        type: 'asset/resource',
        generator: {
          filename: 'media/images/[name]-[hash][ext][query]'
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".gql", ".graphql"],
    fallback: {
      crypto: false
    }
  },
  // https://github.com/rails/webpacker/issues/2932
  // As Decidim uses multiple packs, we need to enforce a single runtime, to prevent duplication
  optimization: {
    runtimeChunk: false
  },
  entry: {
    decidim_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-admin/app/packs/entrypoints/decidim_admin.js",
    decidim_accountability: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-accountability/app/packs/entrypoints/decidim_accountability.js",
    decidim_accountability_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-accountability/app/packs/entrypoints/decidim_accountability_admin.js",
    decidim_assemblies: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-assemblies/app/packs/entrypoints/decidim_assemblies.js",
    decidim_assemblies_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-assemblies/app/packs/entrypoints/decidim_assemblies_admin.js",
    decidim_api_docs: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-api/app/packs/entrypoints/decidim_api_docs.js",
    decidim_blogs: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-blogs/app/packs/entrypoints/decidim_blogs.js",
    decidim_budgets: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-budgets/app/packs/entrypoints/decidim_budgets.js",
    decidim_conferences_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-conferences/app/packs/entrypoints/decidim_conferences_admin.js",
    decidim_consultations: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-consultations/app/packs/entrypoints/decidim_consultations.js",
    decidim_core: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_core.js",
    decidim_conference_diploma: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_conference_diploma.js",
    decidim_debates_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-debates/app/packs/entrypoints/decidim_debates_admin.js",
    decidim_dev: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-dev/app/packs/entrypoints/decidim_dev.js",
    decidim_elections: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections.js",
    decidim_elections_onboarding: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_onboarding.js",
    decidim_elections_admin_pending_action: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_admin_pending_action.js",
    decidim_elections_admin_vote_statistics: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_admin_vote_statistics.js",
    decidim_elections_trustee_key_ceremony: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_trustee_key_ceremony.js",
    decidim_elections_trustee_tally: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_trustee_tally.js",
    decidim_elections_trustee_zone: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_trustee_zone.js",
    decidim_elections_trustee_trustee_zone: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_trustee_trustee_zone.js",
    decidim_elections_voter_casting_vote: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_voter_casting-vote.js",
    decidim_elections_voter_new_vote: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_voter_new-vote.js",
    decidim_elections_voter_setup_preview: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_voter_setup-preview.js",
    decidim_elections_voter_setup_vote: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_voter_setup-vote.js",
    decidim_elections_voter_verify_vote: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_elections_voter_verify-vote.js",
    decidim_email: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_email.js",
    decidim_votings_admin_monitoring_committee_members_form: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_monitoring_committee_members_form.js",
    decidim_votings_admin_polling_officers_form: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_polling_officers_form.js",
    decidim_votings_admin_polling_officers_picker: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_polling_officers_picker.js",
    decidim_votings_admin_polling_stations_form: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_polling_stations_form.js",
    decidim_votings_admin_update_census_dataset_status: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_update_census_dataset_status.js",
    decidim_votings_voting_description_cell: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_voting-description-cell.js",
    decidim_votings_admin_votings: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-elections/app/packs/entrypoints/decidim_votings_admin_votings.js",
    decidim_forms: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-forms/app/packs/entrypoints/decidim_forms.js",
    decidim_forms_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-forms/app/packs/entrypoints/decidim_forms_admin.js",
    decidim_questionnaire_answers_pdf: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-forms/app/packs/entrypoints/decidim_questionnaire_answers_pdf.js",
    decidim_initiatives: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-initiatives/app/packs/entrypoints/decidim_initiatives.js",
    decidim_initiatives_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-initiatives/app/packs/entrypoints/decidim_initiatives_admin.js",
    decidim_initiatives_print: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-initiatives/app/packs/entrypoints/decidim_initiatives_print.js",
    decidim_initiatives_initiatives_votes: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-initiatives/app/packs/entrypoints/decidim_initiatives_initiatives_votes.js",
    decidim_map: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_map.js",
    decidim_meetings: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-meetings/app/packs/entrypoints/decidim_meetings.js",
    decidim_meetings_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-meetings/app/packs/entrypoints/decidim_meetings_admin.js",
    decidim_pages: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-pages/app/packs/entrypoints/decidim_pages.js",
    decidim_participatory_processes: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-participatory_processes/app/packs/entrypoints/decidim_participatory_processes.js",
    decidim_participatory_processes_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-participatory_processes/app/packs/entrypoints/decidim_participatory_processes_admin.js",
    decidim_proposals: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-proposals/app/packs/entrypoints/decidim_proposals.js",
    decidim_proposals_admin: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-proposals/app/packs/entrypoints/decidim_proposals_admin.js",
    decidim_sortitions: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-sortitions/app/packs/entrypoints/decidim_sortitions.js",
    decidim_system: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-system/app/packs/entrypoints/decidim_system.js",
    decidim_templates: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-templates/app/packs/entrypoints/decidim_templates.js",
    decidim_geocoding_provider_photon: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_geocoding_provider_photon.js",
    decidim_geocoding_provider_here: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_geocoding_provider_here.js",
    decidim_map_provider_default: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_map_provider_default.js",
    decidim_map_provider_here: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_map_provider_here.js",
    decidim_widget: "/home/populate/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/bundler/gems/decidim-afefcec08295/decidim-core/app/packs/entrypoints/decidim_widget.js"
  }
}
