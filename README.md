# Aid Distribution Dashboard – Coding Challenge

This repository contains my solution for the **Aidonic Technical Challenge**. The goal is to build a cross-platform dashboard for managing and visualizing aid distributions, using modern frontend technologies and best architectural practices.

## ⚡ Quick Start (For Evaluators)

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment
cp .env.example .env

# 3. Start the web application
pnpm start

# 4. Start the mobile application (in a new terminal)
pnpm dev:mobile

# 5. Open applications in browser
open http://localhost:3000  # Web Dashboard
open http://localhost:8081  # Mobile App (Web)
```

**Expected Result**:

- **Web**: Dashboard with table of aid distributions, filtering, pagination, and analytics charts
- **Mobile**: Distribution list with cards, details screen, and pull-to-refresh functionality

## 🎯 Challenge Requirements Delivered

This solution implements all required features from the Aidonic Coding Task:

### ✅ Web (Next.js)

- Distribution List Page with table view, filters, and pagination
- Distribution Details Page with full information and beneficiary list
- Charts Page with pie chart (distributions by status) and line chart (distributions over time)

### ✅ Mobile (React Native)

- Distribution List Screen with scrollable cards
- Details Screen with full distribution information
- Pull-to-refresh functionality
- Back navigation

### ✅ Cross-Platform Features

- Container/Presentation pattern implementation
- SOLID principles and CLEAN Code practices
- Shared business logic and types
- Mocked API integration (JSON Server)
- Unit testing with Jest and React Testing Library

## 🚀 Setup and Run Instructions

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Expo CLI** (for mobile development) - Required for mobile app

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aidonic-dashboard

# Install dependencies
pnpm install

# Copy environment variables (required for proper API configuration)
cp .env.example .env
```

### Run All Services

```bash
# Start mock API and web app
pnpm start
```

This will start:

- **Mock API server** on port 3001
- **Web application** on port 3000

### Run Mobile App

```bash
# Start mobile development server
pnpm dev:mobile
```

This will start:

- **Mobile development server** (Expo) on port 8081

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode (web only)
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

**Test Coverage**:

- **Web**: Component tests with React Testing Library
- **Mobile**: Component tests with React Native Testing Library
- **Shared**: Unit tests for utilities and business logic

### Run Services Separately

```bash
# Terminal 1 - Mock API
pnpm dev:api

# Terminal 2 - Web App
pnpm dev:web

# Terminal 3 - Mobile App
pnpm dev:mobile
```

### Access the Application

- **Web Dashboard**: http://localhost:3000
- **Distribution List**: http://localhost:3000
- **Analytics Charts**: http://localhost:3000/charts
- **Distribution Details**: http://localhost:3000/distributions/[id] (e.g., http://localhost:3000/distributions/dst--001)
- **Mock API**: http://localhost:3001/distributions
- **Mock API Details**: http://localhost:3001/distributionDetails/[id]
- **Mobile App (Web)**: http://localhost:8081 (when running `pnpm dev:mobile`)

### Environment Variables

The project includes a `.env.example` file with the following variables:

- `NEXT_PUBLIC_API_URL` - API endpoint for web app (default: http://localhost:3001)
- `EXPO_PUBLIC_API_URL` - API endpoint for mobile app (default: http://localhost:3001)
- `NODE_ENV` - Environment mode (development/production)
- `JEST_WORKERS` - Number of Jest workers for testing

Copy `.env.example` to `.env` and modify as needed for your environment.

## 🤔 Assumptions & Trade-offs

### Assumptions Made

1. **Data Structure**: Assumed the API would return distributions with optional `beneficiaryList` for details
2. **User Experience**: Assumed users prefer immediate feedback (loading states, error handling)
3. **Performance**: Assumed 4 items per page is optimal for the table view
4. **Mobile Experience**: Assumed pull-to-refresh is the standard pattern for mobile lists
5. **Cross-Platform**: Assumed shared business logic is more valuable than platform-specific optimizations

### Trade-offs Considered

1. **Monorepo vs Separate Repos**

   - **Chosen**: Monorepo for code sharing
   - **Trade-off**: Slightly more complex setup, but better for maintenance

2. **React Query vs Redux**

   - **Chosen**: React Query for server state
   - **Trade-off**: Less control over caching, but simpler implementation

3. **JSON Server vs MSW**

   - **Chosen**: JSON Server for simplicity
   - **Trade-off**: Less realistic API simulation, but easier setup

4. **Tailwind CSS vs Styled Components**

   - **Chosen**: Tailwind for rapid development
   - **Trade-off**: Larger bundle size, but faster development

5. **Testing Strategy**

   - **Chosen**: Jest + Testing Library for component testing
   - **Trade-off**: Less E2E coverage, but faster feedback loop

6. **Mobile Charts**
   - **Chosen**: Not implemented (not required in challenge)
   - **Trade-off**: Incomplete mobile experience, but meets requirements

## 🏗️ Architectural Overview

This project is built as a **monorepo** using pnpm workspaces, and follows a **modular feature-based architecture** with a clear separation of concerns using the Container/Presentation pattern and SOLID principles.

### Monorepo Structure

```
packages/
├── web-next/           # Next.js web application
├── mobile-react-native/ # React Native mobile app
├── shared/             # Shared business logic, types, utilities
└── mock-api/           # JSON Server for API mocking
```

### Container/Presentation Pattern

- **Containers**: Handle business logic, state management, and data fetching
- **Presentation Components**: Pure components focused only on rendering UI
- **Custom Hooks**: Extract and encapsulate business logic

### SOLID Principles

- **Single Responsibility**: Each component has one clear purpose
- **Open/Closed**: Components are extensible without modification
- **Liskov Substitution**: Components can be replaced with similar implementations
- **Interface Segregation**: Components accept only necessary props
- **Dependency Inversion**: High-level components depend on abstractions

### Shared Package Architecture

The `@aidonic/shared` package contains:

- Type definitions (`Distribution`, `Beneficiary`)
- API services (`DistributionApi`)
- React Query hooks (`useDistributions`, `useDistributionDetails`)
- Utility functions (`formatDate`, `formatNumber`)
- Constants and configuration

### State Management

- **React Query (TanStack Query)** for server state management
- Built-in caching and synchronization
- Automatic background refetching
- Error handling and retry logic

### Testing Strategy

- **Jest** for test framework
- **React Testing Library** for web components
- **React Native Testing Library** for mobile components
- Unit tests for business logic and utilities
- Component tests for UI behavior

### API Design

- **RESTful API** with JSON Server
- `GET /distributions` - List all distributions with filtering
- `GET /distributions/:id` - Get single distribution with details
- Simple and predictable endpoints for easy testing

## 📄 License

This project is for evaluation purposes only.
