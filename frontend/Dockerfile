FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Add host flag to allow container-to-container communication
ENV VITE_HOST=0.0.0.0

CMD ["npm", "run", "dev", "--", "--host"] 