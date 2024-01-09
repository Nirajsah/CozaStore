FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV=production

COPY . .

RUN bun next build

# Build Docker image for Next.js app
# ENTRYPOINT ["/wait-for-it.sh", "postgres:5432", "--", "bun", "run", "build"]
# Set entrypoint for running the Next.js app
CMD ["bun", "start"]
