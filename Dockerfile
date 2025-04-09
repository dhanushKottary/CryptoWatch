FROM node:alpine3.20
WORKDIR /usr/local/app

COPY *.json ./
COPY public ./public
COPY src ./src

RUN npm install

EXPOSE 3000

CMD [ "npm" , "start"]