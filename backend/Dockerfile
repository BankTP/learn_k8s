FROM node:alpine

COPY package.json ./
RUN npm install --no-dev
COPY . .

CMD ["npm","run","start"]