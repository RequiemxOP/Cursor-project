FROM node:18-alpine

WORKDIR /app

# Install wget for healthcheck and netcat for wait-for-it
RUN apk add --no-cache wget netcat-openbsd

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Add wait-for-it script
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/books || exit 1

# Use wait-for-it to wait for MongoDB
CMD ["/wait-for-it.sh", "mongodb:27017", "--", "npm", "run", "start:dev"] 