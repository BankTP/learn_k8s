# BUILD NPM

FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL=/app
ENV REACT_APP_BACKEND_URL=/api
RUN npm run build
 


# COPY TO NGINX
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html