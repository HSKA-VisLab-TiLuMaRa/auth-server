FROM node:8

# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm i
ENTRYPOINT [ "node", "app.js" ]
