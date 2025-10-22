# Docker Guide - Fundyze

## Prerequisites

- Docker installed (version 20.10+)
- Docker Compose installed (version 2.0+)

## Configuration

### Environment Variables

Before starting, copy the `.env.example` file to `.env` and adjust the variables according to your needs:

```bash
cp .env.example .env
```

Main available variables:
- `BACKEND_PORT`: Exposed port for the backend (default: 8080)
- `FRONTEND_PORT`: Exposed port for the frontend (default: 3000)
- `VITE_API_URL`: API URL for the frontend (default: http://localhost:8080)
- `RUST_LOG`: Log level for Rust (default: info)
- `NODE_ENV`: Node.js environment (default: production)

**Important**: The `.env` file is ignored by git for security. Never commit secrets in it.

## Quick Start

### Launch the complete application

```bash
docker-compose up -d
```

### Stop the application
```bash
docker-compose down
```

### Rebuild after changes
```bash
docker-compose up -d --build
```

## Services

### Backend (Rust)
- **Port**: 8080
- **URL**: http://localhost:8080
- **Image**: fundyze-backend

### Frontend (React/Vite)
- **Port**: 3000
- **URL**: http://localhost:3000
- **Image**: fundyze-frontend

## Useful Commands

### View logs
```bash
# All services
docker-compose logs -f

# Backend only
docker-compose logs -f backend

# Frontend only
docker-compose logs -f frontend
```

### Rebuild a specific service
```bash
docker-compose build backend
docker-compose build frontend
```

### Execute a command in a container
```bash
# Backend
docker-compose exec backend /bin/bash

# Frontend
docker-compose exec frontend /bin/sh
```

### Clean Docker resources
```bash
# Stop and remove containers, networks
docker-compose down

# Also remove volumes
docker-compose down -v

# Clean unused images
docker system prune -a
```

## Development

For local development, you can mount volumes for hot-reload:

```yaml
# Add in docker-compose.yml under 'backend'
volumes:
  - ./backend/src:/usr/src/fundyze-backend/src

# Add in docker-compose.yml under 'frontend'
volumes:
  - ./frontend/src:/app/src
```

## Troubleshooting

### Frontend cannot contact the backend
Check that the backend URL in your frontend code uses `http://localhost:8080` or configure an environment variable.

### Rust build error
```bash
docker-compose build --no-cache backend
```

### Node build error
```bash
docker-compose build --no-cache frontend
```

### Ports already in use

Modify the ports in your `.env` file:

```bash
BACKEND_PORT=8081
FRONTEND_PORT=3001
```

Then rebuild the frontend:

```bash
docker-compose build frontend
docker-compose up -d frontend
```
