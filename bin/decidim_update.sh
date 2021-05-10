#!/bin/bash

echo "- Updating decidim...."
bundle update decidim
echo "- Installing decidim new migrations"
bin/rails decidim:upgrade
echo "- Updating application"
bin/rails update
echo "Ready! Please commit and deploy"

