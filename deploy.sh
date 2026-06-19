#!/usr/bin/env bash
# Production redeploy script for satyajewellers.com (Vite SPA)
# Run on the VPS as the `deploy` user:
#   /var/www/Jewellers-FrontEnd/deploy.sh
# Or from your laptop:
#   ssh deploy@72.60.221.55 '/var/www/Jewellers-FrontEnd/deploy.sh'
#
# No PM2 / Nginx reload needed — Nginx serves files straight from dist/.
# `npm run build` atomically replaces the contents; the next request picks
# up the new build. Hashed asset filenames + the no-store header on
# index.html (set in /etc/nginx/sites-available/satyajewellers.conf) make
# sure browsers fetch the new bundle.

set -euo pipefail

APP_DIR="/var/www/Jewellers-FrontEnd"
BRANCH="main"

cd "$APP_DIR"

echo "→ Pulling latest code ($BRANCH)"
git fetch --all --prune
git reset --hard "origin/$BRANCH"

echo "→ Installing dependencies"
npm ci

echo "→ Building"
npm run build

echo "✅ Deployed at $(date -u +%FT%TZ) (no service reload needed)"
