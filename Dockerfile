# Etapa 1: build de VitePress
FROM node:20 AS builder
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Nginx para servir los archivos estáticos
FROM nginx:alpine
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
