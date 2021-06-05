FROM node:latest

COPY myapp.tar.gz .

RUN tar -xf myapp.tar.gz

RUN cd ./backend

RUN npm i

RUN node index.js