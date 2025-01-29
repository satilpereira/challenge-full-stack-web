# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application (optional, as we will mount it in dev)
COPY . .

# Build the application and then start it (for prod)
CMD ["sh", "-c", "npm run build && npm run start"]  # Production commands
