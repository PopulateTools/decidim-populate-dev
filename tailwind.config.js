const { inherit, current, transparent, white } = require("tailwindcss/colors")

const withOpacity =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;

module.exports = {
  // This content is generated automatically by decidim:webpacker:install task, it
  // shouldn't be updated manually.
  // The array must contain all the decidim modules active in the application
  content: ['/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-api','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-core','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-comments','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-accountability','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-admin','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-assemblies','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-blogs','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-budgets','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-debates','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-forms','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-generators','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-meetings','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-pages','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-participatory_processes','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-proposals','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-sortitions','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-templates','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-surveys','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-system','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-verifications','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-bulletin_board-0.23.0','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-conferences','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-consultations','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-dev','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-elections','/Users/fernando/.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/bundler/gems/decidim-8e2c3f93f4ab/decidim-initiatives','.'].flatMap(directory => [
    `${directory}/app/views/**/*.html.erb`,
    `${directory}/app/cells/**/*.{rb,erb}`,
    `${directory}/app/helpers/**/*.rb`,
    `${directory}/app/packs/**/*.js`,
    `${directory}/lib/**/*.rb`
  ]),
  // Comment out the next line to disable purging the tailwind styles
  // safelist: [{ pattern: /.*/ }],
  theme: {
    colors: {
      inherit,
      current,
      transparent,
      white,
      primary: withOpacity("--primary-rgb"),
      secondary: withOpacity("--secondary-rgb"),
      tertiary: withOpacity("--tertiary-rgb"),
      success: withOpacity("--success-rgb"),
      alert: withOpacity("--alert-rgb"),
      warning: withOpacity("--warning-rgb"),
      black: "#020203",
      gray: {
        DEFAULT: "#6B72804D", // 30% opacity
        2: "#3E4C5C",
        3: "#E1E5EF",
        4: "#242424",
        5: "#F6F8FA"
      },
      background: {
        DEFAULT: "#F3F4F7",
        2: "#FAFBFC",
        3: "#EFEFEF",
        4: "#E4EEFF99" // 60% opacity
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem"
      }
    },
    fontFamily: {
      sans: ["Source Sans Pro", "ui-sans-serif", "system-ui", "sans-serif"]
    },
    fontSize: {
      xs: ["13px", "16px"],
      sm: ["14px", "18px"],
      md: ["16px", "20px"],
      lg: ["18px", "23px"],
      xl: ["20px", "25px"],
      "2xl": ["24px", "30px"],
      "3xl": ["32px", "40px"],
      "4xl": ["36px", "45px"],
    }
  },
  plugins: [require("@tailwindcss/typography")]
}