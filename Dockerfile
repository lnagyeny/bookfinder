FROM node:lts-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . ./
RUN npm run build
USER node
FROM httpd:alpine
COPY --from=build /usr/src/app/dist /usr/local/apache2/htdocs/
EXPOSE 80
