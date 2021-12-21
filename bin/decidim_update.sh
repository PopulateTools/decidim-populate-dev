#!/bin/bash

# handle kill signs
trap "echo; exit 1" INT TERM

function log() {
  echo
  echo "=================================================="
  echo $1
  echo "=================================================="
  echo
}

log "Updating decidim" && bundle update
log "Updating decidim webpacker config" && bin/rails decidim:webpacker:install
log "Installing decidim new migrations" && bin/rails choose_target_plugins && bin/rails railties:install:migrations
log "Updating application" && bin/update
log "Ready! Please commit and deploy"
