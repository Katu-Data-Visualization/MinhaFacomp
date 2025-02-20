FROM node:18-alpine

WORKDIR /usr/src/app
ARG BRANCH
COPY package*.json ./
RUN npm install
COPY . .
ENV BRANCH=$BRANCH

CMD ["npm", "run", "dev"]