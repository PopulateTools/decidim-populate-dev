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

# root path project
__root="$(cd "$(dirname "$(dirname "${BASH_SOURCE[0]}")")" && pwd)"

log "Updating decidim" && bundle update
log "Updating decidim webpacker config" && "${__root}/bin/rails" decidim:webpacker:install
log "Installing decidim new migrations" && "${__root}/bin/rails" decidim:choose_target_plugins && "${__root}/bin/rails" railties:install:migrations
log "Updating application" && "${__root}/bin/update"
