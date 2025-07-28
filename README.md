# What a Clip App

A full-stack application with Rust backend and Next.js frontend for managing clips.

## Architecture

This project uses a microservices architecture with git submodules:

- **Backend**: Rust application with Rocket framework ([whataclip-backend](https://github.com/lapini99/whataclip-backend.git))
- **Frontend**: Next.js React application ([whataclip-frontend](https://github.com/lapini99/whataclip-frontend.git))
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Git
- Docker and Docker Compose
- Rust (for backend development)
- Node.js and npm (for frontend development)

### Initial Setup

1. **Clone the main repository:**
   ```bash
   git clone https://github.com/lapini99/whataclip-main.git
   cd whataclip-main
   ```

2. **Initialize and update submodules:**
   ```bash
   git submodule update --init --recursive
   ```
   
   This command will:
   - Initialize the submodule configuration
   - Clone the backend repository into `./backend`
   - Clone the frontend repository into `./frontend`

3. **Verify submodules are properly set up:**
   ```bash
   git submodule status
   ```
   
   You should see output without `-` prefix, indicating submodules are properly initialized.

### Development Setup

#### Using Docker (Recommended)

1. **Start all services:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - MongoDB: localhost:27017

#### Local Development

1. **Backend setup:**
   ```bash
   cd backend
   cargo run
   ```

2. **Frontend setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Working with Submodules

#### Updating Submodules

To pull the latest changes from submodule repositories:

```bash
# Update all submodules to their latest commits
git submodule update --remote

# Or update a specific submodule
git submodule update --remote backend
git submodule update --remote frontend
```

#### Pulling Main Repository with Submodules

```bash
# Pull main repo and update submodules in one command
git pull --recurse-submodules
```

#### Making Changes to Submodules

When working on submodule code:

1. Navigate to the submodule directory
2. Make your changes
3. Commit and push from within the submodule
4. Return to the main repository and commit the submodule reference update

```bash
# Example: updating backend
cd backend
git checkout main  # or appropriate branch
# Make your changes
git add .
git commit -m "Your changes"
git push origin main

# Return to main repo and update submodule reference
cd ..
git add backend
git commit -m "Update backend submodule"
git push
```

### Troubleshooting

#### Submodules Not Initialized

If you see empty `backend/` or `frontend/` directories, or get errors about missing submodules:

```bash
# Remove any existing directories
rm -rf backend frontend

# Re-initialize submodules
git submodule update --init --recursive
```

#### Submodule Status Shows `-` Prefix

The `-` prefix in `git submodule status` indicates uninitialized submodules:

```bash
git submodule init
git submodule update
```

## Project Structure

```
whataclip-main/
├── backend/                 # Rust backend (submodule)
├── frontend/                # Next.js frontend (submodule)
├── docker-compose.yml       # Production Docker setup
├── docker-compose.override.yml  # Development Docker setup
└── README.md               # This file
```

## Contributing

1. Fork the main repository
2. Create a feature branch
3. Make changes to the appropriate submodule(s)
4. Update submodule references in the main repository
5. Submit a pull request