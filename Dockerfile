FROM node:alpine3.20
WORKDIR /usr/local/app

COPY *.json ./
COPY public ./public
COPY src ./src

RUN addgroup -S user && adduser -S -G user user

RUN chown -R user:user /usr/local/app
USER user

RUN npm install

EXPOSE 3000

CMD [ "npm" , "start"]