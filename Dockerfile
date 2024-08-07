# Step 1: Build the application
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Building the application for production
RUN npm run build

# Exposer le port 80
EXPOSE 80

CMD ["npm", "start"]
#CMD ["npm", "test"]
