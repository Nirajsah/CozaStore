#!/bin/bash
echo "Starting Next.js app..."

# Start Next.js app

bun install

bun generate

bun migrate

bun next build

bun start
