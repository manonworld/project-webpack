FROM node:lts-alpine3.13

COPY ./ /fend

WORKDIR /fend

RUN yarn install

# Default port for heroku
EXPOSE 8080
