# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app (if using create-react-app)
RUN npm run build

# Specify the command to start the React app
CMD ["npm", "start"]