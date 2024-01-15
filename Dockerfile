FROM node:20.10.0-slim AS builder

ENV TZ Asia/Tokyo

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./
RUN npx nuxi generate

FROM nginx:1.25.3-alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY frontend-nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
