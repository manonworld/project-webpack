#!/bin/sh
yarn install --production=true
yarn build-prod
yarn start
