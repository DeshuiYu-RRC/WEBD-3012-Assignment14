# Build the React Portfolio Website
FROM node:20-alpine AS builder
WORKDIR /deshui_yu_ui_final_site
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve the built app on port 5575
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /deshui_yu_ui_final_site/build /app/build
EXPOSE 5575
CMD ["serve", "-s", "build", "-l", "5575"]