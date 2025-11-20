# React Component Library with Storybook

A comprehensive UI component library built with React, TypeScript, Styled Components, and Storybook.

**Repository:
** [https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment12.git](https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment12.git)

## Project Overview

This project is a complete UI component library featuring 10 reusable React components with full Storybook integration,
comprehensive testing, Docker deployment support, and automated code quality checks.

## Components Included

The library contains the following components, each with default and disabled states:

- **Button** - Interactive button with multiple sizes and variants
- **Label** - Form label component with required field support
- **Text** - Flexible text component with size and weight options
- **Table** - Complete table system with:
    - Table Header
    - Table Row
    - Table Cell
    - Table Footer
- **Dropdown** - Select dropdown with customizable options
- **Radio Button** - Radio input for single selections
- **Img** - Responsive image component with border radius support
- **Hero Image** - Large banner image with overlay text
- **Card** - Container card with title and content

## Getting Started

#### 1. Clone the Repository

```bash
git clone https://github.com/DeshuiYu-RRC/WEBD-3012-Assignment12.git
cd WEBD-3012-Assignment12
```

#### 2. Build the Docker Image

```bash
docker build --no-cache -t deshui_yu_coding_assignment13 .
```

#### 3. Run the Docker Container

```bash
docker run -p 8018:8018 --name deshui_yu_coding_assignment13 deshui_yu_coding_assignment13
```

#### 4. Access Storybook

Open your browser and navigate to:

```
http://localhost:8018
```

or

```
http://127.0.0.1:8018
```

#### 5. Stop the Container

```bash
# Find the container ID
docker ps

# Stop it
docker stop <container_id>
```

---

## Code Quality Features

### Pre-Commit Checks with Husky

Before every commit, the following checks run automatically:

- **Prettier** - Formats code automatically
- **EsLint** - Check messy code automatically
- **Tests** - Runs all component tests

```bash
git add .
git commit -m "your message"
# Automatically formats code and runs tests
```

If any check fails, the commit will be blocked.

### Manual Commands

```bash
# Format code
npm run format

# Lint check
npm run lint

# Run tests
npm test
```

---

## Running Tests

Run all component tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm test -- --coverage
```

---

## Docker Details

- **Container Name:** `deshui_yu_coding_assignment13`
- **Working Directory:** `/deshui_yu_ui_garden_build_checks`
- **Port:** `8018`
- **Web Server:** Nginx Alpine
- **Build:** Multi-stage build with Node.js 20

---

**Built by Deshui Yu for WEBD-3012**