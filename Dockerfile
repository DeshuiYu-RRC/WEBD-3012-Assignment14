# This is assignment12 - storybook
FROM node:20-alpine AS builder
WORKDIR /deshui_yu_ui_garden_build_checks
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-storybook

# This is assignment13 - server
FROM nginx:alpine
COPY --from=builder /deshui_yu_ui_garden_build_checks/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]