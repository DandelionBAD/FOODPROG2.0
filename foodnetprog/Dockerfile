FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app
COPY * ./
RUN npm install
RUN npm run bu
EXPOSE 8080
CMD [ "http-server", "dist" ]