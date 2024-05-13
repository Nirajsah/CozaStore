FROM --platform=linux/amd64 node:latest 

WORKDIR /app

COPY package.json bun.lockb ./

COPY . .

RUN npm install -g bun

RUN bun install

RUN bun generate

RUN bun migrate

RUN bun run build

EXPOSE 80/tcp

CMD ["bun", "start"]



