# Aid Distribution Dashboard

A cross-platform dashboard application for managing and visualizing aid distributions, built with Next.js and React Native. This solution demonstrates modern frontend architecture, clean code practices, and comprehensive testing strategies.

## Evaluation Setup

**Recommended Development Environment for Review:**

1. **Terminal 1**: `pnpm dev:api` - Mock API server
2. **Terminal 2**: `pnpm dev:mobile` - Mobile application
3. **Terminal 3**: `pnpm dev:web` - Web application (optional)

This configuration demonstrates architectural separation and facilitates comprehensive testing. Refer to the [Development](#development) section for detailed implementation instructions.

## Overview

This application provides a complete solution for viewing, filtering, and analyzing aid distribution data across web and mobile platforms. The implementation follows industry best practices including the Container/Presentation pattern, SOLID principles, and comprehensive test coverage.

## Features

### Web Application (Next.js)

- Distribution list with advanced filtering and pagination
- Detailed distribution information with beneficiary lists
- Analytics dashboard with interactive charts
- Responsive design with modern UI components

### Mobile Application (React Native)

- Distribution list with card-based interface
- Detailed distribution screens
- Pull-to-refresh functionality
- Cross-platform navigation

### Shared Infrastructure

- Unified API layer with error handling
- Shared business logic and type definitions
- Comprehensive utility functions
- Cross-platform data management

## Technical Requirements

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Expo CLI (for mobile development)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd aidonic-dashboard

# Install dependencies (automatically builds shared package)
pnpm install

# Configure environment variables
cp .env.example .env
```

> **Note**: The `pnpm install` command automatically builds the shared package after installing dependencies. This ensures that all workspace packages can properly import from the shared utilities.

## Development

### Development Environment Configuration

For optimal evaluation and development experience, we recommend running services individually to demonstrate architectural separation:

#### Terminal 1 - Mock API Server
```bash
pnpm dev:api
```
Initializes JSON server on port 3001 with mock distribution data.

#### Terminal 2 - Mobile Application
```bash
pnpm dev:mobile
```
Initializes Expo development server on port 8081.

#### Terminal 3 - Web Application (Optional)
```bash
pnpm dev:web
```
Initializes Next.js web application on port 3000.

### Alternative: Start All Services Together

```bash
# Start mock API and web application together
pnpm start
```

This command starts:
- Mock API server on port 3001
- Web application on port 3000

**Note**: For mobile development, you'll still need to run `pnpm dev:mobile` separately.

### Run Tests

```bash
# Execute all test suites
pnpm test

# Run tests in watch mode (web only)
pnpm test:watch

# Generate test coverage report
pnpm test:coverage
```

Test coverage includes:

- Web components with React Testing Library
- Mobile components with React Native Testing Library
- Shared utilities and business logic

### Individual Service Management

For development and evaluation, you can run each service in separate terminals:

```bash
# Terminal 1 - Mock API (Required for both web and mobile)
pnpm dev:api

# Terminal 2 - Web Application
pnpm dev:web

# Terminal 3 - Mobile Application
pnpm dev:mobile
```

**Development Notes:**
- The mock API server must remain active in Terminal 1 to support both web and mobile applications
- API endpoints can be tested directly at `http://localhost:3001/distributions`
- Mobile application can be accessed via web browser through the Expo interface or on physical devices
- Each terminal provides dedicated logging for service-specific debugging

### Building Shared Package

If you make changes to the shared package, you can rebuild it manually:

```bash
# Build shared package
pnpm build

# Or build with watch mode (for development)
pnpm --filter @aidonic/shared dev
```

## Application Access

### Web Interface

- Main Dashboard: http://localhost:3000
- Analytics: http://localhost:3000/charts
- Distribution Details: http://localhost:3000/distributions/[id]

### API Endpoints

- Distribution List: http://localhost:3001/distributions
- Distribution Details: http://localhost:3001/distributionDetails/[id]

### Mobile Interface

- Web Version: http://localhost:8081 (when running mobile server)

## Environment Configuration

The application uses the following environment variables:

| Variable              | Description                     | Default               |
| --------------------- | ------------------------------- | --------------------- |
| `NEXT_PUBLIC_API_URL` | Web application API endpoint    | http://localhost:3001 |
| `EXPO_PUBLIC_API_URL` | Mobile application API endpoint | http://localhost:3001 |
| `NODE_ENV`            | Application environment         | development           |
| `JEST_WORKERS`        | Jest test workers               | 1                     |

Copy `.env.example` to `.env` and modify values as needed for your environment.

## Architecture

### Monorepo Structure

The project is organized as a monorepo using pnpm workspaces:

```
packages/
├── web-next/           # Next.js web application
├── mobile-react-native/ # React Native mobile application
├── shared/             # Shared business logic and utilities
└── mock-api/           # JSON Server API simulation
```

### Design Patterns

#### Container/Presentation Pattern

- **Containers**: Manage business logic, state, and data operations
- **Presentation Components**: Handle UI rendering and user interactions
- **Custom Hooks**: Encapsulate reusable business logic

#### SOLID Principles

- **Single Responsibility**: Each component has a single, well-defined purpose
- **Open/Closed**: Components are extensible without modification
- **Liskov Substitution**: Components can be replaced with compatible implementations
- **Interface Segregation**: Components accept only necessary dependencies
- **Dependency Inversion**: High-level modules depend on abstractions

### State Management

The application uses React Query (TanStack Query) for server state management, providing:

- Automatic caching and synchronization
- Background data refetching
- Error handling and retry mechanisms
- Optimistic updates

### Testing Strategy

- **Framework**: Jest for test execution
- **Web Testing**: React Testing Library for component behavior
- **Mobile Testing**: React Native Testing Library for mobile components
- **Coverage**: Unit tests for utilities and business logic
- **Integration**: Component tests for UI interactions

### API Design

The mock API follows RESTful principles:

- `GET /distributions` - Retrieve distribution list with optional filtering
- `GET /distributionDetails/:id` - Retrieve detailed distribution information
- JSON-based request/response format
- Standard HTTP status codes and error handling

## Development Decisions

### Technology Choices

1. **Monorepo Architecture**

   - Enables code sharing between platforms
   - Simplifies dependency management
   - Facilitates consistent development practices

2. **React Query for State Management**

   - Provides built-in caching and synchronization
   - Reduces boilerplate code
   - Offers excellent developer experience

3. **JSON Server for API Simulation**

   - Rapid development and testing
   - Simple configuration and maintenance
   - Realistic API behavior simulation

4. **Tailwind CSS for Styling**
   - Rapid UI development
   - Consistent design system
   - Excellent responsive design support

### Performance Considerations

- React Query caching reduces unnecessary API calls
- Memoized computations prevent expensive re-renders
- Prefetching strategies improve perceived performance
- Optimized bundle sizes through code splitting

### Accessibility

- Semantic HTML structure
- ARIA attributes for screen readers
- Keyboard navigation support
- Color contrast compliance

## License

This project is created for evaluation purposes only.
