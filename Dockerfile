# Builder stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json yarn.lock* pnpm-lock.yaml* ./

# Install dependencies
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    else npm install; fi

# Copy source code
COPY . .

# Build Next.js app (outputs to 'out' directory with export config)
RUN npm run build || yarn build || pnpm build

# Production stage - Static file server
FROM node:18-alpine AS runner
WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

# Create a non-root user for security
RUN addgroup --gid 1001 --system nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built static files from builder
COPY --from=builder --chown=nextjs:nodejs /app/out ./out

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Serve the static files
CMD ["serve", "-s", "out", "-l", "3000"]
