#!/bin/sh
set -eu

cd "$(dirname "$0")/.."
temporary_dir=$(mktemp -d)
trap 'rm -rf "$temporary_dir"' EXIT

sips -s format png src/lib/assets/courage.webp --out "$temporary_dir/courage.png" >/dev/null
sed "s|../src/lib/assets/courage.webp|file://$temporary_dir/courage.png|" \
	scripts/og-image.svg > "$temporary_dir/og-image.svg"
rsvg-convert -w 1200 -h 630 "$temporary_dir/og-image.svg" -o static/og-image.png
