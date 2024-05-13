# #!/bin/bash
#
# until pg_isready -h db -p 5432; do
#   echo "Waiting for postgres to be ready..."
#   sleep 2
# done
# if [ ! -f "./app/migration_applied" ]; then
#   npm run generate
#   bun run migrate
#   bun run start
#   touch "./app/migration_applied"
# fi
#   exit
# echo "postgres is ready"
#
# # Start Next.js app
# echo "Starting Next.js app..."
# app_cmd="bun start"
# $app_cmd &
# app_pid=$!
#
#
# # Wait for any process to exit
# trap "exit" INT TERM
# wait $postgres_pid $app_pid
# exit $?

#!/bin/sh

# wait_for_postgres() {
#   # Increased wait time and added error handling
#   until pg_isready -h db -p 5432 > /dev/null 2>&1; do
#     echo "Waiting for PostgreSQL to be ready..."
#     sleep 5
#   done
#   if [ $? -eq 0 ]; then
#     echo "PostgreSQL is ready."
#   else
#     echo "Error: Could not connect to PostgreSQL."
#     exit 1
#   fi
# }
#
# # Wait for PostgreSQL to be ready
# wait_for_postgres
#
# # Test connection with psql (optional)
# psql -h db -U $POSTGRES_USER -d $POSTGRES_DB
#
# # Run migrations and start the app if migrations have not been applied
# if [ ! -f "./app/migration_applied" ]; then
#   npm run generate
#   bun run migrate
#   bun run start
#   touch "./app/migration_applied"
# fi

echo "Starting Next.js app..."

# Start Next.js app

RUN bun install

RUN bun generate

RUN bun migrate

RUN bun next build

bun start
