#!/bin/sh

# Directory where the Prisma schema is located
PRISMA_DIR="/app/server/prisma"

# Loop until the Prisma migrations are successfully deployed
until npx prisma migrate deploy --schema=${PRISMA_DIR}/schema.prisma; do
  echo "Migrations failed, retrying in 5 seconds..."
  sleep 5
done

# Start the development server
npm run dev:start