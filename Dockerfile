FROM node:lts-alpine3.13

COPY ./ /fend

WORKDIR /fend

# Default port for heroku
EXPOSE 8080

CMD ["yarn", "install", "--production=true", "--ignore-optional", "--silent", "&&", "yarn", "build-prod"]

ENTRYPOINT ["./install.sh"]

