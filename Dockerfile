FROM node:5

WORKDIR /usr/src
RUN apt-get update \
    && apt-get install -y entr

#docker create --name envpublisher_data -v /usr/src/node_modules /usr/src/typings tianon/true

