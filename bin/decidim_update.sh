#!/bin/bash

# handle kill signs
trap "echo; exit 1" INT TERM

function log() {
  local columns=$(tput cols)
  local text="$1"

  printf '=%.0s' $(seq 1 ${columns})
  printf "%*s\n" $(((${#text}+$columns)/2)) "$text"
  printf '=%.0s' $(seq 1 ${columns})
}

log "Updating decidim" && bundle update decidim
log "Clear packages" && rm -rf package*
log "Updating decidim webpacker config" && bin/rails decidim:webpacker:install
log "Installing decidim new migrations" && bin/rails decidim:choose_target_plugins && bin/rails railties:install:migrations
log "Updating application" && bin/update
