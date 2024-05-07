#!/bin/sh

# Run database migrations
# /bin/sh -c "npm run generate && bun migrate"
#!/bin/sh

FLAG_FILE="/tmp/migrations_executed"

if [ ! -f "$FLAG_FILE" ]; then
  /bin/sh -c "npm run generate && bun migrate"
  touch "$FLAG_FILE"
fi

exit 0
