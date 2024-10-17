# Use the official Node.js image as a base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the default value for the branch as 'main'
ARG BRANCH=main
ENV BRANCH=${BRANCH}

# Command to run the application
CMD [ "npm", "run", "dev" ]