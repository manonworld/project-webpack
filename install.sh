#!/bin/sh
yarn install --production=true --ignore-optional --silent
yarn build-prod
yarn start
