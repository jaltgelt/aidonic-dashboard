export const API_CONFIG = {
  BASE_URL: process.env.API_URL || 'http://localhost:3002',
  ENDPOINTS: {
    DISTRIBUTIONS: '/distributions',
    DISTRIBUTION_BY_ID: (id: string) => `/distributionDetails/${id}`,
  },
} as const;
