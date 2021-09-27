FROM node:16

WORKDIR /docker-start

COPY . .
RUN npm install --production
CMD [ "node", "server.js" ]
