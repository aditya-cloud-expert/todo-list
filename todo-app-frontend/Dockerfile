# Use Node.js for building the React app
FROM node:18 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend codebase
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx image to serve the static files
FROM nginx:stable-alpine

# Copy built files to Nginx's default public directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx listens on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
