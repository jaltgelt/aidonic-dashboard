# Aid Distribution Dashboard – Coding Challenge

This repository contains my solution for the **Aidonic Technical Challenge**. The goal is to build a cross-platform dashboard for managing and visualizing aid distributions, using modern frontend technologies and best architectural practices.

## 🚀 Setup and Run Instructions

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Expo CLI** (for mobile development)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aidonic-dashboard

# Install dependencies
pnpm install
```

### Run All Services

```bash
# Start mock API, web app, and mobile development server
pnpm start
```

This will start:

- **Mock API server** on port 3002
- **Web application** on port 3000
- **Mobile development server** (Expo)

### Run Services Separately

```bash
# Terminal 1 - Mock API
pnpm dev:api

# Terminal 2 - Web App
pnpm dev:web

# Terminal 3 - Mobile App
pnpm mobile:web
```

### Access the Application

- **Web Dashboard**: http://localhost:3000
- **Distribution List**: http://localhost:3000
- **Analytics Charts**: http://localhost:3000/charts
- **Mock API**: http://localhost:3002/distributions

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
