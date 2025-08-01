# Build stage: use Bun to install and build
FROM oven/bun:latest AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN BUN_INSTALL_REGISTRY=https://registry.npmmirror.com bun install --verbose
COPY . .
RUN bun run build

# Production stage: serve built files via nginx
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# Expose HTTP port
EXPOSE 80
# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
