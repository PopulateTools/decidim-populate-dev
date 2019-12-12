# decidim-demo

## Setting up the application

Clone the repository:

```
git clone git@github.com:PopulateTools/decidim-demo.git $DEV_DIR/decidim-demo
```

Install the required Ruby version and dependencies:

```bash
cd $DEV_DIR/decidim-demo
rbenv install $(cat .ruby-version)
bundle install
```

Generate `.rbenv-vars` and fill in the values of `SECRET_KEY_BASE` and `RAILS_MASTER_KEY` (ask for the values):

```bash
cp .rbenv-vars.example .rbenv-vars
```

Initialize the database:

```bash
bin/rails db:setup
```

Load the seeds:

```bash
bin/rails db:seed
```

Start the server:

```bash
bin/rails s
```

The application is available at [http://localhost:3000/](http://localhost:3000/)
