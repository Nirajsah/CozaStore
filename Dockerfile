FROM node:18

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /app

COPY package.json ./

RUN npm install -g bun

COPY . .

RUN bun install

RUN bun next build

# Build Docker image for Next.js app
# ENTRYPOINT ["/wait-for-it.sh", "postgres:5432", "--", "bun", "run", "build"]
# Set entrypoint for running the Next.js app
EXPOSE 3000
