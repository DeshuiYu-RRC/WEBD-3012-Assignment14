# Portfolio Website - Assignment 14

## Project Overview

This is a portfolio website built with React, showcasing coursework and projects completed throughout the program. The application is containerized using Docker and runs on `localhost:5575`.

## Author Information

- **Name**: Deshui Yu
- **Course**: WEBD-3012 (273795) Business Systems Build and Testing
- **Assignment**: 14 - Building a Portfolio Website

## Features

The portfolio website includes the following sections:

### 1. Basic Information
- Name, title, and contact information
- Professional bio
- Social media links (GitHub, LinkedIn)

### 2. Work Section
- Project showcase with:
  - Title
  - Description
  - Images
  - Links to repositories
  - Technology stack used

### 3. Skills Section
- Programming languages
- Frameworks and libraries
- Development tools

### 4. Resources Section
- React Documentation
- Docker Documentation
- Git
- GitHub
- Storybook
- Node Version Manager

### 5. Developer Setup
- VS Code configuration
- Terminal setup
- Editor Font
- Node.js Setup

## Getting Started

### Step 1: Clone or Download the Project

```bash
git clone https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment14.git
cd WEBD-3012-Assignment14
```

### Step 2: Build the Docker Image


```bash

docker build --no-cache -t deshui_yu_coding_assignment14 .
```

This command:
- `--no-cache` build without cache
- `-t` tags the image with your name
- `.` specifies the current directory as the build context

**Build time:** Approximately 2-5 minutes depending on your internet connection

### Step 3: Run the Docker Container

```bash
docker run -p 5575:5575 --name deshui_yu_coding_assignment14 deshui_yu_coding_assignment14
```

Command explanation:
- `-d`: Run container in detached mode (background)
- `-p 5575:5575`: Map port 5575 from container to host
- `--name`: Assign a name to the container
- Last argument: Image name to run

### Step 4: Access the Application

Open your web browser and navigate to:
- `http://localhost:5575`
- Or `http://127.0.0.1:5575`

You should see your portfolio website running!

## Docker Commands Reference

### View Running Containers
```bash
docker ps
```

### View All Containers (including stopped)
```bash
docker ps -a
```

### Stop the Container
```bash
docker stop deshui_yu_coding_assignment14
```

### Start the Container
```bash
docker start deshui_yu_coding_assignment14
```

### Remove the Container
```bash
# Stop first if running
docker stop deshui_yu_coding_assignment14
# Then remove
docker rm deshui_yu_coding_assignment14
```

### View Container Logs
```bash
docker logs deshui_yu_coding_assignment14
```

### Remove the Image
```bash
docker rmi deshui_yu_coding_assignment14
```

### Rebuild After Changes
```bash
# Stop and remove existing container
docker stop deshui_yu_coding_assignment14
docker rm deshui_yu_coding_assignment14

# Remove old image
docker rmi deshui_yu_coding_assignment14

# Rebuild and run
docker build -t deshui_yu_coding_assignment14 .
docker run -d -p 5575:5575 --name deshui_yu_coding_assignment14 deshui_yu_coding_assignment14
```

## Customizing Your Portfolio

### Updating Personal Information

Edit `src/data/portfolioData.js` to customize:

1. **Basic Info**: Update your name, email, bio, etc.
2. **Work Projects**: Add your actual projects
3. **Skills**: List your programming languages and tools
4. **Resources**: Add helpful resources you use
5. **Developer Setup**: Describe your development environment