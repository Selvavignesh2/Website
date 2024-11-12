# Use the official Node.js image from Docker Hub
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 90
EXPOSE 90

# Start the application
CMD ["npm", "start"]

