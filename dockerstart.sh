#!/bin/bash

npm install
./node_modules/.bin/typings install

ls *.ts test/*.ts | entr npm run compile &
ls dist/*.js | entr npm test

