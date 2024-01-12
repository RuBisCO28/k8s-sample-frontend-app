FROM node:20.10.0-slim AS builder

ENV TZ Asia/Tokyo

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./
RUN npx nuxi generate

FROM nginx:1.25.3-alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
