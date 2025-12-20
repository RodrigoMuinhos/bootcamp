# Backend Dockerfile (Express + Node)
FROM node:18-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV PORT=4000
EXPOSE 4000
CMD ["node", "index.mjs"]
