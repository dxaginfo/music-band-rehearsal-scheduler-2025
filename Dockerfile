# Build stage for the React client
FROM node:18-alpine AS client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Build stage for the Node.js backend
FROM node:18-alpine AS server-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY --from=client-builder /app/client/build ./client/build
RUN npm run build:server

# Production stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built files from previous stages
COPY --from=server-builder /app/dist ./dist
COPY --from=client-builder /app/client/build ./client/build

# Copy prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Expose ports
EXPOSE 8000

# Start the application
CMD ["node", "dist/server.js"]