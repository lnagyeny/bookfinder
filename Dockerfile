FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
RUN npm install --production
RUN npm install serve --save-dev
EXPOSE 3000
USER node
CMD ["npx", "serve", "dist", "-p", "3000"]