# Build stage
FROM node:22 as builder
WORKDIR /app
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/
RUN cd backend && npm install
RUN cd frontend && npm install
COPY backend/ ./backend/
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY --from=builder /app/backend /app/backend
RUN apk add --no-cache nodejs npm
EXPOSE 80 3000
EXPOSE 80 3000
CMD ["sh", "-c", "nginx -g 'daemon off;' & cd /app/backend && npm start"]