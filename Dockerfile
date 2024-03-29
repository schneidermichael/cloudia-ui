FROM node:16-alpine AS build

LABEL maintainer="michael.schneider@stud.fh-campuswien.ac.at"

WORKDIR /app

COPY . .
RUN npm ci && npm run build

# nginx server
FROM nginx:alpine
COPY --from=build /app/dist/angular-cloudia-frontend /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf