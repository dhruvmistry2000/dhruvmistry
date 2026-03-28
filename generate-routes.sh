#!/usr/bin/env bash
# Run this once locally after adding a new route to routes.json
# Usage: bash generate-routes.sh

set -e

ROUTES_FILE="data/routes.json"
BASE_URL="https://dhruvmistry2000.github.io/dhruvmistry"

# Requires jq — brew install jq / apt install jq
if ! command -v jq &> /dev/null; then
  echo "Error: jq is required. Install with: sudo apt install jq"
  exit 1
fi

# Read all visible bash-type routes and generate bootstrap files
jq -c '.[] | select(.visible == true and .type == "bash")' "$ROUTES_FILE" | \
while IFS= read -r route; do
  slug=$(echo "$route" | jq -r '.slug')
  raw=$(echo "$route"  | jq -r '.raw')
  title=$(echo "$route" | jq -r '.title')
  github=$(echo "$route" | jq -r '.github')

  cat > "$slug" <<EOF
#!/usr/bin/env bash
# Dhruv Mistry — ${title}
# ${github}
set -e
exec bash <(curl -sSL "${raw}")
EOF

  echo "✓ Generated bootstrap file: ${slug}  →  ${raw}"
done

echo ""
echo "Done. Commit the new files and push to GitHub Pages."
