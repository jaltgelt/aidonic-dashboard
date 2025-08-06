# Aidonic Dashboard - Web Application

A modern, scalable web application built with Next.js, TypeScript, and Tailwind CSS following clean architecture principles and the Container/Presentation pattern.

## 🏗️ Architecture Overview

This application follows the **Container/Presentation pattern** and **SOLID principles** to ensure maintainable, testable, and scalable code.

### Architecture Patterns

#### 1. Container/Presentation Pattern

- **Containers**: Handle business logic, state management, and data fetching
- **Presentation Components**: Pure components focused only on rendering UI
- **Pages**: Top-level components that compose containers and presentation components

#### 2. Feature-Based Organization

```
src/
├── features/           # Feature-based modules
│   └── distributions/  # Distribution feature
│       ├── components/ # Feature-specific components
│       │   ├── DistributionFilters.tsx
│       │   ├── DistributionTable.tsx
│       │   └── DistributionPagination.tsx
│       ├── containers/ # Business logic containers
│       │   └── DistributionList.container.tsx
│       ├── hooks/      # Custom hooks
│       │   └── useDistributions.ts
│       ├── pages/      # Page components
│       │   └── DistributionListPage.tsx
│       ├── constants/  # Feature constants
│       │   └── index.ts
│       └── api/        # API layer
│           └── getDistributions.ts
├── shared/             # Shared utilities and components
│   ├── components/     # Reusable UI components
│   │   └── Navigation.tsx
│   ├── types/          # Shared type definitions
│   │   └── distribution.ts
│   ├── utils/          # Utility functions
│   │   ├── cn.ts
│   │   └── dateUtils.ts
│   ├── config/         # Configuration
│   │   └── api.ts
│   └── lib/            # Library utilities
│       └── fetcher.ts
└── components/ui/      # Base UI components
    ├── button.tsx
    ├── select.tsx
    └── table.tsx
```

#### 3. SOLID Principles Implementation

- **Single Responsibility**: Each component has one clear purpose
- **Open/Closed**: Components are extensible without modification
- **Liskov Substitution**: Components can be replaced with similar implementations
- **Interface Segregation**: Components accept only necessary props
- **Dependency Inversion**: High-level components depend on abstractions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run both the mock API and web application:**

   ```bash
   # From root directory
   pnpm start
   ```

   This will start:

   - Mock API server on port 3002
   - Web application on port 3000

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

**Alternative**: Run services separately:

```bash
# Terminal 1 - Mock API
cd mock-api && pnpm dev

# Terminal 2 - Web App
cd packages/web-next && pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server (web app only)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 📁 Project Structure

### Core Components

#### DistributionListPage

- **Location**: `features/distributions/pages/DistributionListPage.tsx`
- **Purpose**: Main page component for the distribution list
- **Responsibilities**: Layout composition, navigation integration

#### DistributionListContainer

- **Location**: `features/distributions/containers/DistributionList.container.tsx`
- **Purpose**: Business logic container for distribution list
- **Responsibilities**: State management, data filtering, pagination logic

#### useDistributions Hook

- **Location**: `features/distributions/hooks/useDistributions.ts`
- **Purpose**: Custom hook for distribution list logic
- **Responsibilities**: API data fetching, filtering, pagination, state management

### Presentation Components

#### DistributionFilters

- **Location**: `features/distributions/components/DistributionFilters.tsx`
- **Purpose**: Filter controls for region and status
- **Props**: regions, statuses, selected values, change handlers

#### DistributionTable

- **Location**: `features/distributions/components/DistributionTable.tsx`
- **Purpose**: Table display for distributions
- **Props**: distributions array
- **Features**: Empty state handling, disabled "View Details" buttons

#### DistributionPagination

- **Location**: `features/distributions/components/DistributionPagination.tsx`
- **Purpose**: Pagination navigation
- **Props**: current page, total pages, page change handler

### UI Components

#### Button

- **Location**: `components/ui/button.tsx`
- **Variants**: default, outline, ghost
- **Sizes**: sm, md, lg
- **Features**: Clean focus states, disabled states

#### Select

- **Location**: `components/ui/select.tsx`
- **Features**: Dropdown selection with keyboard navigation, outside click handling, Escape key support
- **Composition**: Select, SelectTrigger, SelectContent, SelectItem, SelectValue

#### Table

- **Location**: `components/ui/table.tsx`
- **Composition**: Table, TableHeader, TableBody, TableRow, TableHead, TableCell
- **Features**: Responsive design, hover states

## 🎨 Design System

### Colors

- **Primary**: Slate gray (`hsl(215 25% 27%)`)
- **Background**: Light gray (`hsl(0 0% 98%)`)
- **Text**: High contrast text colors
- **Borders**: Subtle border colors (`hsl(0 0% 85%)`)

### Typography

- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold, large text for hierarchy
- **Body**: Readable font sizes and line heights
- **Labels**: Small, muted text for form labels

### Spacing

- **Consistent**: 4px base unit system
- **Responsive**: Mobile-first approach
- **Layout**: Max-width containers with proper padding

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/` points to `src/`)
- Custom type definitions for better DX

### Tailwind CSS

- Custom color palette with CSS variables
- Responsive breakpoints
- Component-based utility classes
- Custom table and form styling

### ESLint

- TypeScript-aware linting
- React-specific rules
- Import/export organization
- Next.js specific configurations

## 📊 Data Flow

1. **Page Component** renders the container
2. **Container** uses custom hook for business logic
3. **Hook** fetches data from mock API and manages state
4. **API Layer** communicates with json-server mock API
5. **Presentation Components** receive props and render UI
6. **User interactions** flow back through the chain

## 🧪 Testing Strategy

### Unit Testing

- Component testing with React Testing Library
- Hook testing with custom render hooks
- Utility function testing

### Integration Testing

- Container + Presentation component integration
- Page component testing
- User interaction flows

### E2E Testing

- Critical user journeys
- Cross-browser compatibility

## 🚀 Deployment

### Build Process

1. TypeScript compilation
2. Next.js optimization
3. Static asset generation
4. Bundle analysis

### Environment Variables

- `NEXT_PUBLIC_API_URL` - API endpoint (defaults to http://localhost:3002)

## 📈 Performance

### Optimizations

- **Code Splitting**: Automatic by Next.js
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Lazy Loading**: Component-level lazy loading

### Monitoring

- Core Web Vitals tracking
- Error boundary implementation
- Performance metrics collection

## 🔮 Current Features

### Distribution List

- ✅ **Data Fetching**: Real-time data from mock API
- ✅ **Filtering**: Region and status filters
- ✅ **Pagination**: Client-side pagination with 4 items per page
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Empty States**: Proper handling of no results
- ✅ **Loading States**: User feedback during data loading
- ✅ **Error Handling**: Graceful error display

### UI/UX Features

- ✅ **Clean Design**: Professional, modern interface
- ✅ **Accessibility**: Keyboard navigation, proper ARIA labels
- ✅ **Interactive Elements**: Hover states, focus management
- ✅ **Consistent Styling**: Unified design system

## 🔮 Future Enhancements

### Planned Features

- [ ] Distribution details page
- [ ] Charts page with data visualization
- [ ] Real API integration
- [ ] Authentication system
- [ ] Mobile responsive improvements

### Technical Improvements

- [ ] Unit test coverage
- [ ] E2E test implementation
- [ ] Performance monitoring
- [ ] Accessibility improvements
- [ ] Internationalization support

## 🤝 Contributing

### Code Standards

- Follow TypeScript strict mode
- Use functional components with hooks
- Implement proper error boundaries
- Write meaningful component documentation
- Follow Container/Presentation pattern
- Apply SOLID principles

### Git Workflow

1. Create feature branch
2. Implement changes
3. Add tests
4. Update documentation
5. Submit pull request

## 📝 License

This project is part of the Aidonic Dashboard application.
