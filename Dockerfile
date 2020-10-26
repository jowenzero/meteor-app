FROM node:12.14.0

WORKDIR /app

COPY package.json .

RUN yarn install
RUN yarn global add serve
