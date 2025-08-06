export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  ENDPOINTS: {
    DISTRIBUTIONS: '/distributions',
    DISTRIBUTION_BY_ID: (id: string) => `/distributions/${id}`,
  },
} as const;
