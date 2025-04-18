# Book Store MERN Application

A full-stack book store application built with MongoDB, Express.js, React, and Node.js (MERN stack).

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
book-store/
├── backend/           # Node.js/Express backend
│   └── Dockerfile
├── frontend/         # React frontend
│   └── Dockerfile
├── .env             # Environment variables
├── docker-compose.yml
└── README.md
```

## Services

1. Frontend (React) - Port 5173
2. Backend (Node.js/Express) - Port 5000
3. MongoDB Database - Port 27017
4. Mongo Express (Admin Interface) - Port 8081

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd book-store
```

2. Create a `.env` file in the root directory with the necessary environment variables (use .env.example as a template).

3. Build and start the containers:
```bash
docker-compose up --build
```

4. Access the services:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- MongoDB Admin Interface: http://localhost:8081

## Development

- The application uses Docker volumes for hot-reloading in development:
  - Frontend and backend code changes will automatically reflect
  - MongoDB data persists between container restarts

## Stopping the Application

To stop the application and remove containers:
```bash
docker-compose down
```

To stop the application and remove containers, volumes, and networks:
```bash
docker-compose down -v
```

## Health Checks

- MongoDB and Backend services include health checks
- Services will restart automatically on failure
- Dependencies are properly managed through Docker Compose

## Environment Variables

Create a `.env` file with the following variables:
```
MONGODB_USER=admin
MONGODB_PASSWORD=adminpassword
MONGODB_DATABASE=book-store
MONGODB_HOST=mongodb
MONGODB_PORT=27017
BACKEND_PORT=5000
NODE_ENV=development
FRONTEND_PORT=5173
VITE_API_URL=http://localhost:5000
```

## Notes

- The MongoDB data is persisted in a named volume `mongodb_data`
- All services are connected through the `book-store-network` network
- The application is configured for development mode with hot-reloading enabled
