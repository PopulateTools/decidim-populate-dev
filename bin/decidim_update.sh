#!/bin/bash

echo "- Updating decidim...."
bundle update
echo "- Updating decidim webpacker config"
bin/rails decidim:webpacker:install
echo "- Installing decidim new migrations"
bin/rails decidim:upgrade
echo "- Updating application"
bin/update
echo "Ready! Please commit and deploy"

