FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run react-dev

EXPOSE 3000
EXPOSE 80

CMD [ "node", "server" ]