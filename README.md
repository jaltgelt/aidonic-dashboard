# Aid Distribution Dashboard – Coding Challenge

This repository contains my solution for the **Aidonic Technical Challenge**. The goal is to build a cross-platform dashboard for managing and visualizing aid distributions, using modern frontend technologies and best architectural practices.

## 🏗️ Architecture Overview

This project is built as a **monorepo** using pnpm workspaces, and follows a **modular feature-based architecture** with a clear separation of concerns using the Container/Presentation pattern and SOLID principles.

### 📁 Folder Structure (Web App)

```
packages/web-next/
├── public/                      → Static assets
├── src/
│   ├── app/                    → App Router layout, routing, metadata
│   │   ├── page.tsx            → Main dashboard page
│   │   ├── distributions/      → Distribution routes
│   │   │   └── [id]/
│   │   │       └── page.tsx    → Individual distribution details
│   │   ├── charts/             → Analytics routes
│   │   │   └── page.tsx        → Charts dashboard
│   │   ├── layout.tsx          → Root layout
│   │   └── globals.css         → Global styles
│   ├── features/               → Domain features
│   │   ├── distributions/      → Distribution feature
│   │   │   ├── components/     → Presentational UI components
│   │   │   │   ├── DistributionTable.tsx
│   │   │   │   ├── DistributionFilters.tsx
│   │   │   │   ├── DistributionPagination.tsx
│   │   │   │   └── DistributionDetails.tsx
│   │   │   ├── containers/     → Container components with business logic
│   │   │   │   ├── DistributionList.container.tsx
│   │   │   │   └── DistributionDetails.container.tsx
│   │   │   ├── hooks/          → Custom hooks for fetching and state
│   │   │   │   ├── useDistributions.ts
│   │   │   │   └── useDistributionDetails.ts
│   │   │   ├── pages/          → Page components
│   │   │   │   ├── DistributionListPage.tsx
│   │   │   │   └── DistributionDetailsPage.tsx
│   │   │   └── constants/      → Feature constants
│   │   └── analytics/          → Analytics feature
│   │       ├── components/     → Chart components
│   │       │   ├── AidTypePieChart.tsx
│   │       │   ├── BeneficiariesLineChart.tsx
│   │       │   └── ChartsContainer.tsx
│   │       ├── containers/     → Analytics containers
│   │       │   └── Analytics.container.tsx
│   │       ├── hooks/          → Analytics hooks
│   │       │   └── useAnalytics.ts
│   │       ├── pages/          → Analytics pages
│   │       │   └── AnalyticsPage.tsx
│   │       ├── utils/          → Data transformers
│   │       │   └── chartDataTransformers.ts
│   │       └── constants/      → Chart constants
│   ├── shared/                 → Reusable utilities and components
│   │   ├── components/         → Shared UI components
│   │   │   └── Navigation.tsx
│   │   ├── types/              → Shared type definitions
│   │   │   └── distribution.ts
│   │   ├── utils/              → Utility functions
│   │   │   ├── cn.ts
│   │   │   └── dateUtils.ts
│   │   ├── config/             → Configuration
│   │   │   └── api.ts
│   │   └── lib/                → Library utilities
│   │       └── fetcher.ts
│   └── components/ui/          → Base UI components
│       ├── button.tsx
│       ├── select.tsx
│       └── table.tsx
├── .eslintrc.json
├── tailwind.config.ts
└── tsconfig.json
```

## ✅ Challenge Requirements

### Web (Next.js) - COMPLETED ✅

- [x] **Distribution list** (table with filters, pagination)
- [x] **Distribution detail page** (individual distribution view)
- [x] **Charts page** (pie chart + line chart)
- [x] **Container/Presentation structure** (perfectly implemented)
- [x] **SOLID + Clean Code principles** (all principles followed)
- [x] **API mocked** (json-server with proper endpoints)

### Mobile (React Native) - PLANNED

- [ ] Distribution list (cards)
- [ ] Details screen (stacked)
- [ ] Pull to refresh
- [ ] Charts page (optional)

## 🛠️ Tech Stack

- **React 19** (Latest)
- **Next.js 15** (App Router)
- **TypeScript** (Strict mode)
- **Tailwind CSS** (Custom design system)
- **Recharts** (Data visualization)
- **json-server** (Mock API)
- **pnpm** (Monorepo management)
- **ESLint** (Code quality)

## 🏛️ Architecture Principles

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

## 📊 Mock API (json-server)

### Endpoints

- `GET /distributions` - List all distributions (without beneficiaryList)
- `GET /distributionDetails/{id}` - Individual distribution with beneficiaryList

### API Structure

**List Endpoint (`/distributions`):**

```json
[
  {
    "id": "dst--001",
    "region": "West Nile",
    "date": "2025-01-15",
    "status": "Completed",
    "beneficiaries": 800,
    "aidType": "Food",
    "deliveryChannel": "Vouchers"
  }
]
```

**Individual Endpoint (`/distributionDetails/{id}`):**

```json
{
  "id": "dst--001",
  "region": "West Nile",
  "date": "2025-01-15",
  "status": "Completed",
  "beneficiaries": 800,
  "aidType": "Food",
  "deliveryChannel": "Vouchers",
  "beneficiaryList": [
    { "id": "bnf--001", "name": "Jane Doe" },
    { "id": "bnf--002", "name": "John Smith" }
  ]
}
```

## 🎯 Current Features

### 📋 Distribution List

- ✅ **Real-time data** from mock API
- ✅ **Advanced filtering** by region and status
- ✅ **Client-side pagination** (4 items per page)
- ✅ **Responsive design** (mobile-first approach)
- ✅ **Empty states** handling
- ✅ **Loading states** with user feedback
- ✅ **Error handling** with graceful display
- ✅ **Navigation** to individual distributions

### 📄 Distribution Details

- ✅ **Complete distribution information** display
- ✅ **Responsive layout** (adaptive grid system)
- ✅ **Beneficiary list** with proper formatting
- ✅ **Back navigation** to distribution list
- ✅ **Loading and error states**
- ✅ **Professional UI** with proper spacing

### 📈 Analytics Dashboard

- ✅ **Aid Type Pie Chart** - Distribution by aid type
- ✅ **Beneficiaries Over Time** - Line chart showing trends
- ✅ **Real data integration** from distributions
- ✅ **Interactive tooltips** with formatted data
- ✅ **Professional styling** with custom colors
- ✅ **Responsive design** for all screen sizes
- ✅ **Data aggregation** by month for time series

### 🎨 UI/UX Features

- ✅ **Modern design** with Tailwind CSS
- ✅ **Accessibility** (keyboard navigation, ARIA labels)
- ✅ **Interactive elements** (hover states, focus management)
- ✅ **Consistent styling** (unified design system)
- ✅ **Professional appearance** suitable for production

## 🚀 Quick Start

### Run Both Services (Recommended)

```bash
pnpm start
```

This will start:

- **Mock API server** on port 3002
- **Web application** on port 3000

### Run Services Separately

```bash
# Terminal 1 - Mock API
pnpm dev:api

# Terminal 2 - Web App
pnpm dev:web
```

## 📱 Access the Application

- **Web Dashboard**: http://localhost:3000
- **Distribution List**: http://localhost:3000
- **Analytics Charts**: http://localhost:3000/charts
- **Mock API**: http://localhost:3002/distributions

## 🧪 Testing & Quality

### Code Quality

- ✅ **TypeScript** (strict mode, no `any` types)
- ✅ **ESLint** (no warnings, clean code)
- ✅ **Prettier** (consistent formatting)
- ✅ **Type checking** (no type errors)

### Architecture Quality

- ✅ **Container/Presentation pattern** (perfect separation)
- ✅ **SOLID principles** (all 5 principles implemented)
- ✅ **Clean Code** (readable, maintainable, modular)
- ✅ **Feature-based organization** (scalable structure)

## 📱 Mobile App (React Native)

**Status**: ✅ **COMPLETED - Distribution List Feature**

### ✅ **Completed Features:**

- **Project Setup**: Expo React Native with TypeScript
- **Architecture**: Container/Presentation pattern implemented
- **Shared Package Integration**: Using `@aidonic/shared` for business logic
- **Distribution List**: Mobile-optimized list with FlatList
- **Touch Interactions**: Tap to view distribution details
- **Loading States**: Activity indicators and error handling
- **Responsive Design**: Works on different screen sizes

### 🎯 **Next Features:**

- [ ] Add filters (Region, Status)
- [ ] Implement pagination
- [ ] Add dedicated distribution details page
- [ ] Create analytics charts
- [ ] Add navigation between screens
- [ ] Implement offline support

### 🚀 **How to Run:**

```bash
cd packages/mobile-react-native
pnpm start
# Then scan QR code with Expo Go app or run on simulator
```

## 🔮 Future Enhancements

### Planned Features

- [ ] **Mobile app** (React Native) - ✅ **COMPLETED**
- [ ] **Real API integration**
- [ ] **Authentication system**
- [ ] **Advanced filtering** (date ranges, multiple selections)
- [ ] **Export functionality** (PDF, CSV)
- [ ] **Real-time updates** (WebSocket integration)

### Technical Improvements

- [ ] **Unit test coverage** (Jest + RTL)
- [ ] **E2E testing** (Playwright)
- [ ] **Performance monitoring**
- [ ] **Internationalization** (i18n)
- [ ] **PWA features** (offline support)

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

## 👨‍💻 Author

**Juan Altgelt**  
Frontend Developer  
Buenos Aires, Argentina  
Built with care for the Aidonic technical interview.

## 📄 License

This project is for evaluation purposes only.
